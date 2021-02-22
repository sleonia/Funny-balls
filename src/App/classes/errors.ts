export class Error {
    public static missingContext(): void {
        throw 'Missing contex';
    }

    public static missingElementInDOM(name: string): void {
        throw `Missing ${name} dom element`;
    }
}
