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
        file: {
            type: "dateFile",
            filename: "logs/app",
            pattern: ".yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            compress: true,
            maxLogSize: 4194304,
            daysToKeep: 7,
            layout: {
                type: "pattern",
                pattern:
                    "[%d] [%p] [%f{1}(%l)] [%X{correlationId}] [%X{accountId}] %m",
            },
        },
    },
    categories: {
        default: {
            appenders: ["stdout", "file"],
            enableCallStack: true,
            level: "debug",
        },
    },
};
