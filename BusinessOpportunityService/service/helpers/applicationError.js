const errorCode = require("./../../config/errorCode");

/**
 * Construct a custom error object
 */
module.exports = class ApplicationError extends Error {
    /**
     * Construct a custom application error object.
     *
     * @param {number} code error code
     */
    constructor(originalCode, args = []) {
        let serverErrorCode = "E000000001";
        var level = errorCode[serverErrorCode].level;
        var status = errorCode[serverErrorCode].status;
        var message = errorCode[serverErrorCode].message;
        // var args = args
        var code = serverErrorCode;

        if (originalCode in errorCode) {
            level = errorCode[originalCode].level;
            status = errorCode[originalCode].status;
            message = errorCode[originalCode].message;
            code = originalCode;
        }
        super(message);
        this.level = level;
        this.status = status;
        this.args = args;
        this.code = code;
        // Maintains proper stack trace (only on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApplicationError);
        }
    }
};
