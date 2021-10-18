const { logger } = require("../helpers");

/**
 * Logger utility class.
 */
module.exports = class LoggerUtil {
    /**
     * output javascript error
     */
    static logError(error) {
        logger.info(error.name + " - " + error.message);
        LoggerUtil.logStacktrace(error.stack);
    }

    /**
     * output error log and stacktrace as info
     */
    static logApplicationError(applicationError) {
        // log top line
        let topline = applicationError.code + " - " + applicationError.message;
        if (applicationError.level == "D") {
            logger.debug(topline);
        } else if (applicationError.level == "I") {
            logger.info(topline);
        } else if (applicationError.level == "E") {
            logger.error(topline);
        } else {
            logger.error(topline);
        }
        // log stacktrace
        LoggerUtil.logStacktrace(applicationError.stack);
    }

    /**
     * stacktrace
     */
    static logStacktrace(stack) {
        if (stack) {
            var lines = stack.split(/\r\n|\n/);
            for (var i = 0; i < lines.length; i++) {
                logger.info(lines[i]);
            }
        }
    }
};
