const businessOpportunityService = require("../../service/BusinessOpportunityService");

describe("BusinessOpportunityService", () => {
    test("getUser", async () => {

        //execute
        let user = await businessOpportunityService.getUser(1);

        //test
        expect(user.id).toEqual("1");
        expect(user.username).toEqual("saligram");


        // //test
        // expect("1").toEqual("1");
    });
});
