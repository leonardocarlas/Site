export interface Page {
    header : Header,
    footer : Footer,
    section1 : Section1,
    section2 : Section2,
    board : Board,
    recentWorks : RecentWorks,
    projects : Projects,
    studyCareer : StudyCareer,
    languageSection : LanguageSection,
    services : Services,
    blog : Blog,
    languages : Languages,
    contact : Contact
};

export interface Header {
    services: string,
    blog: string,
    languages: string,
    buttonContactMe: string,
};

export interface Footer {
    websiteStack : string,
    mail         : string,  
    website      : string, 
    rights       : string,
    privacy      : string,
    cookie       : string, 
}

interface TitleSubtitle {
    title : string,
    subtitle : string,
}

export interface Section1 extends TitleSubtitle {}
export interface Section2 extends TitleSubtitle {}

export interface Board {
    frontend : string,
    backend : string,
    devops : string,
    otherProgrammingLanguages : string,
}

export interface RecentWorks extends TitleSubtitle {}


export interface Projects {
    title : string,
    startup : string,
    description : string,
    period : string,
    online : string,
    viewRepo : string,
    collaborations : string,
    contactButton : string,
}

export interface University {
    name : string,
    program : string,
    period : string
}

export interface StudyCareer extends TitleSubtitle {

    paduaBachelorName  : string,
    paduaBachelorProgram  : string,
    paduaBachelorPeriod  : string,
    coimbraErasmusName  : string,
    coimbraErasmusProgram  : string,
    coimbraErasmusPeriod  : string,
    uclmErasmusName  : string,
    uclmErasmusProgram  : string,
    uclmErasmusPeriod  : string,
    paduaMasterName  : string,
    paduaMasterProgram  : string,
    paduaMasterPeriod  : string,
    

}


export interface LanguageSection {
    title   : string,
    esFront : string,
    enFront : string,
    itFront : string,
    frFront : string,
    ptFront : string,
}

export interface Services extends TitleSubtitle {
    websiteDev : string,
    api : string,
    smartHomeConf  : string,
    intranetDev : string,
    optSoftware : string,
    dataAnalys  : string,
    subtitleContact  : string,
    contactButton  : string,

}

export interface Blog {
    title : string,
}

export interface Languages extends TitleSubtitle {
    from : string,
    word: string,
    textButton : string
}

export interface Contact extends TitleSubtitle {
    mailErrorButton : string,
    mailError : string,
    mailSuccessButton : string,
    mailSuccess : string,
    nome : string,
    email : string,
    text : string,
    submit : string,
    apiObjectMail : string,
    apiBodyMail : string,
    apiHtmlMessage : string,
}