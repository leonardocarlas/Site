import { Page, Header, Footer, Blog, Section1, Section2, Board, RecentWorks, 
    Projects, StudyCareer, LanguageSection, Services, Languages, Contact } from "../models/page";

function fromJsonToObj(json : any)  {
    let p = {} as Page;

    let h = {} as Header;
    h.services = json?.header?.services;
    h.blog = json?.header?.blog;
    h.languages = json?.header?.languages;
    h.buttonContactMe = json?.header?.buttonContactMe;
    p.header = h;

    let f = {} as Footer;
    f.websiteStack = json?.footer?.websiteStack;
    f.rights= json?.footer?.rights;
    p.footer = f;

    let b = {} as Blog;
    b.title = json?.blog?.title;
    p.blog = b;

    let s1 = {} as Section1;
    let s2 = {} as Section2;
    s1.title = json?.home?.section1?.title;
    s1.subtitle = json?.home?.section1?.subtitle;
    s2.title = json?.home?.section2?.title;
    s2.subtitle = json?.home?.section2?.subtitle;
    p.section1 = s1;
    p.section2 = s2;

    let bo = {} as Board;
    bo.frontend = json?.home?.board?.frontend;
    bo.backend = json?.home?.board?.backend;
    bo.devops = json?.home?.board?.devops;
    bo.otherProgrammingLanguages = json?.home?.board?.otherProgrammingLanguages;
    p.board = bo;

    let re = {} as RecentWorks;
    re.title = json?.home?.recentWorks?.title;
    re.subtitle = json?.home?.recentWorks?.subtitle;
    p.recentWorks = re;

    let pr = {} as Projects;
    pr.title = json?.home?.projects?.title;
    pr.startup = json?.home?.projects?.startup;
    pr.description = json?.home?.projects?.description;
    pr.period = json?.home?.projects?.period;
    pr.online = json?.home?.projects?.online;
    pr.viewRepo = json?.home?.projects?.viewRepo;
    pr.collaborations = json?.home?.projects?.collaborations;
    pr.contactButton = json?.home?.projects?.contactButton;
    p.projects = pr;

    let st = {} as StudyCareer;
    st.title = json?.home?.studyCareer?.title;
    st.subtitle = json?.home?.studyCareer?.subtitle;

    st.paduaBachelorName = json?.home?.studyCareer?.universities?.paduaBachelor?.name;
    st.paduaBachelorPeriod   = json?.home?.studyCareer?.universities?.paduaBachelor?.period;
    st.paduaBachelorProgram  = json?.home?.studyCareer?.universities?.paduaBachelor?.program;
    st.coimbraErasmusName   = json?.home?.studyCareer?.universities?.coimbraErasmus?.name;
    st.coimbraErasmusPeriod  = json?.home?.studyCareer?.universities?.coimbraErasmus?.period;
    st.coimbraErasmusProgram = json?.home?.studyCareer?.universities?.coimbraErasmus?.program;
    st.uclmErasmusName       = json?.home?.studyCareer?.universities?.uclmErasmus?.name;
    st.uclmErasmusPeriod    = json?.home?.studyCareer?.universities?.uclmErasmus?.period;
    st.uclmErasmusProgram    = json?.home?.studyCareer?.universities?.uclmErasmus?.program;
    st.paduaMasterName       = json?.home?.studyCareer?.universities?.paduaMaster?.name;
    st.paduaMasterPeriod     = json?.home?.studyCareer?.universities?.paduaMaster?.period;
    st.paduaMasterProgram   = json?.home?.studyCareer?.universities?.paduaMaster?.program;
    p.studyCareer = st;

    let l = {} as LanguageSection;
    l.title   = json?.home?.languagesSection?.title;
    l.esFront = json?.home?.languagesSection?.esFront;
    l.enFront = json?.home?.languagesSection?.enFront;
    l.itFront = json?.home?.languagesSection?.itFront;
    l.frFront = json?.home?.languagesSection?.frFront;
    l.ptFront = json?.home?.languagesSection?.ptFront;
    p.languageSection = l;
    

    let se = {} as Services;
    se.title = json?.services?.title;
    se.subtitle = json?.services?.subtitle;
    se.subtitleContact = json?.services?.subtitleContact;
    se.contactButton = json?.services?.contactButton;
    se.websiteDev  = json?.services?.websiteDev;
    se.api  = json?.services?.api;
    se.smartHomeConf  = json?.services?.smartHomeConf;
    se.intranetDev = json?.services?.intranetDev;
    se.optSoftware  = json?.services?.optSoftware;
    se.dataAnalys = json?.services?.dataAnalys;
    p.services = se;

    let la = {} as Languages;
    la.title = json?.languages?.title;
    la.subtitle = json?.languages?.subtitle;    
    la.from = json?.languages?.from;  
    la.textButton = json?.languages?.textButton;
    p.languages = la;

    let co = {} as Contact;
    co.title = json?.contact?.title;
    co.email = json?.contact?.email;
    co.subtitle = json?.contact?.subtitle;
    co.nome = json?.contact?.nome;
    co.text = json?.contact?.text;
    co.submit = json?.contact?.submit;
    co.mailSuccess = json?.contact?.mailSuccess;
    co.mailSuccessButton = json?.contact?.mailSuccessButton;
    co.mailError = json?.contact?.mailError;
    co.mailErrorButton = json?.contact?.mailErrorButton;
    co.apiObjectMail = json?.contact?.api?.objectMail;
    co.apiBodyMail = json?.contact?.api?.bodyMail;
    co.apiHtmlMessage = json?.contact?.api?.htmlMessage;
    p.contact = co;

    return p;
}


export default fromJsonToObj;
