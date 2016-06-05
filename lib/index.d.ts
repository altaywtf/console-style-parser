/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
export interface IParsedLogs {
    content?: string;
    color?: string;
}
declare function parse(log: string[]): IParsedLogs[];
export { parse };
