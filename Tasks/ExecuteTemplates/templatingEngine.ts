import handlebars = require('handlebars');
import path = require('path');

export class TemplatingEngine {

    templates : {[key: string]: HandlebarsTemplateDelegate };   

    constructor(templatesFiles: string[]) {
        for (var index = 0; index < templatesFiles.length; index++) {
            var templateFile = templatesFiles[index];
            var templateFileName = path.basename(templateFile);
            if (templateFileName[0] == "_"){
                //andlebars.registerPartial()
            } else {

            }
        }
    }

    apply(context: any): string {
        return "";
    }
}

export class ContextLoader {
    Load(files: string[], variables: { [key: string]: string }): any {

    }
}