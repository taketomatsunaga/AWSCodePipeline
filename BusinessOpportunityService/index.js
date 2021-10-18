const {
    logger,
    ApplicationError,
    LoggerUtil,
    utils,
} = require("./service/helpers");

const config = require("./config/environment");
const businessOpportunityService = require("./service/BusinessOpportunityService");

exports.handler = async function (event) {
    try {
        //TODO replace MDC contents if nessesary
        logger.addContext("correlationId", "correlationId_to_be_replaced");
        logger.addContext("accountId", "accountId_to_be_replaced");
        logger.log("event " + JSON.stringify(event));
        var response = {
            statusCode: 200,
            body: "",
        };
        switch (event.operation) {
            case "GetUser":
                response.body = JSON.stringify(
                    await businessOpportunityService.getUser(event.id)
                );
                return response;
            default:
                response.statusCode = 400;
                response.body = JSON.stringify({
                    errorCode: "E000000001",
                    errorMessage: "Unknown field, unable to resolve",
                });
                return response;
        }
    } catch (err) {
        try {
            if (err instanceof ApplicationError) {
                LoggerUtil.logApplicationError(err);
            } else {
                LoggerUtil.logError(err);
                err = new ApplicationError("E000000001");
                LoggerUtil.logApplicationError(err);
            }
        } catch (e) {
            LoggerUtil.logError(e);
            err = new ApplicationError("E000000001");
            LoggerUtil.logApplicationError(err);
        }

        let code = err.code || "E000000001";
        let args = err.args || [];
        let message = err.message || "Unexpected server error";
        let status = err.status || 500;

        response.statusCode = status;
        response.body = JSON.stringify({
            code,
            args,
            message,
            status,
        });
        return response;
    }
};
