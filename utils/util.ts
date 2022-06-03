import { NextRouter } from "next/router";
import { Page } from "../models/page";
import resources from "../public/locales/i18n";


export class Util {
    public static getLocale(router: NextRouter) : Page {
        let t;
        switch(router.locale) { 
          case 'en': { 
            t = resources.enPage;
            break; 
          } 
          case 'it': { 
            t = resources.itPage
            break; 
          }
          case 'de': { 
            t = resources.dePage;
            break; 
          } 
          case 'es': { 
            t = resources.esPage
            break; 
          } 
          case 'pt': { 
            t = resources.ptPage;
            break; 
          } 
          case 'fr': { 
            t = resources.frPage
            break; 
          } 
          default: { 
            t = resources.enPage; 
            break; 
          } 
        }
        return t;
    }
}



