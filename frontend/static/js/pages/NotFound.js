export default class {
    constructor() {
        document.title = "404 NotFound";
    }
    async getHtml() {
        return `
            <h1>404 Not Found</h1>
        `;
    }
}