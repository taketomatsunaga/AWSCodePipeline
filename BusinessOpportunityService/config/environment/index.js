const _ = require("lodash");
const env = process.env.NODE_ENV;
if (!env) {
    process.env.NODE_ENV = "local";
}

// All configurations will extend these options
// ============================================
const all = {
    envname: "default",
    isProduction: false,
};

console.log("env is ", process.env.NODE_ENV);

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, require(`./${process.env.NODE_ENV}.js`) || {});
