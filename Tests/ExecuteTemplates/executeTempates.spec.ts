import executeTemplates = require("../../Tasks/ExecuteTemplates/templatingEngine");



describe("Template Engine", () => {



    var source: string;

    beforeEach(function () {
        source = JSON.stringify({
            sampleValue: "12"
        });
    });

    describe("BasicTemplate", () => {
        it(": should fail", () => {
            expect(true).toEqual(false);
        });
    });

});

describe("Context Loader", () => {
    describe("Json Files", () => {
        it(": should fail", () => {
            expect(true).toEqual(false);
        });
    });
});