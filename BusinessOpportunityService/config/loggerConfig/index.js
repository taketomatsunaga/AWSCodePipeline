const _ = require("lodash");
const env = process.env.NODE_ENV;
if (!env) {
    process.env.NODE_ENV = "local";
}

// All configurations will extend these options
// ============================================
const all = {
    appenders: {
        stdout: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern:
                    "[%d] [%p] [%f{1}(%l)] [%X{correlationId}] [%X{accountId}] %m",
            },
        },
    },
    categories: {
        default: {
            appenders: ["stdout"],
            enableCallStack: true,
            level: "info",
        },
    },
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, require(`./${process.env.NODE_ENV}.js`) || {});
