// Production specific configuration
// =================================
module.exports = {
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
