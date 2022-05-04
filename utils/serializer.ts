import { Page } from "../models/page";

function fromJsonToObj(json : any) : Page {
    let p = {} as Page;
    p.title = json.title;
    p.intro = json.intro;
    return p;
}

export default fromJsonToObj;

/*
if (locale === 'en')
    t = resources.enPage;
  if (locale === 'it')
    t = resources.itPage; 
  if (locale === 'de')
    t = resources.dePage;
  if (locale === 'es')
    t = resources.esPage;
  if (locale === 'pt')
    t = resources.ptPage;
  if (locale === 'fr')
    t = resources.ptPage;
    */