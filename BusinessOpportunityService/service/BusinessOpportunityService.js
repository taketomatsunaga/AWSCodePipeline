const { logger, ApplicationError, LoggerUtil, utils } = require("./helpers");

class BusinessOpportunityService {
    constructor() {
        this.userDirectory = {
            "1": {
                id: "1",
                username: "saligram",
                firstname: "Karthik",
                lastname: "Saligrama",
            },
        };
    }

    async getUser(id) {
        if (this.userDirectory[id] === undefined) {
            throw new ApplicationError("E001000000");
        }
        return this.userDirectory[id];
    }
}

module.exports = new BusinessOpportunityService();
