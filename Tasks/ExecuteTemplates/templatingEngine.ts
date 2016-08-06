import handlebars = require('handlebars');

export class TemplatingEngine {

    constructor(templates: string[]) {

    }

    apply(context: any): string {
        return "";
    }
}

export class ContextLoader {
    Load(files: string[], variables: { [key: string]: string }): any {

    }
}