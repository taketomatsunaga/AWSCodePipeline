const log4js = require("log4js");
const loggerConfig = require("../../config/loggerConfig");
log4js.configure(loggerConfig);

const logger = log4js.getLogger();

console.debug = logger.debug.bind(logger);
console.log = logger.info.bind(logger);
console.warn = logger.warn.bind(logger);
console.error = logger.error.bind(logger);

const logLevel = process.env.LOG_LEVEL || "info";
logger.level = logLevel;

logger.shutdown = function (cb) {
    log4js.shutdown(cb);
};

module.exports = logger;
