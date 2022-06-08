// place it where you store your types
// import all namespaces for default language only
import enJson from './en/translation.json';
import itJson from './it/translation.json';
import frJson from './fr/translation.json';
import esJson from './es/translation.json';
import ptJson from './pt/translation.json';
import deJson from './de/translation.json';

import fromJsonToObj from '../../utils/serializer';
import { Page } from '../../models/page';


export interface Resources {
   enPage : Page,
   itPage : Page,
   frPage : Page,
   dePage : Page,
   esPage : Page,
   ptPage : Page,
};

const resources = {} as Resources;
resources.enPage = fromJsonToObj(enJson);
resources.itPage = fromJsonToObj(itJson);
resources.frPage = fromJsonToObj(frJson);
resources.esPage = fromJsonToObj(esJson);
resources.ptPage = fromJsonToObj(ptJson);
resources.dePage = fromJsonToObj(deJson);

export default resources;
