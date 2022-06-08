import { Page, Header } from "../models/page";

function fromJsonToObj(json : any)  {
    let p = {} as Page;
    let h = {} as Header;
    h.services = json?.header?.services;
    h.blog = json?.header?.blog;
    h.languages = json?.header?.languages;
    h.buttonContactMe = json?.header?.buttonContactMe;
    p.header = h;
    return p;
}


export default fromJsonToObj;
