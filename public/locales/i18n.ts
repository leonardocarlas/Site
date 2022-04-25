// place it where you store your types
// import all namespaces for default language only
import enJson from './en/common.json';
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

export default resources;
