export interface TranslationExample {
    id : number,
    from : string,
    to : string
}

export default interface Translation {
    test : string,
    from : string,
    to   : string,
    translation : Array<string>,
    examples : Array<TranslationExample>,
}