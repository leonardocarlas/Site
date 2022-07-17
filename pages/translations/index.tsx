import Button from '../../components/Button/Button';
import styles from './Translations.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import TranslationCard from '../../components/TranslationCard/TranslationCard';
import esPic from '../../public/svg/flags/es.svg';
import itPic from '../../public/svg/flags/it.svg';
import enPic from '../../public/svg/flags/us.svg';
import dePic from '../../public/svg/flags/de.svg';
import ptPic from '../../public/svg/flags/pt.svg';
import frPic from '../../public/svg/flags/fr.svg';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';
import { Constants } from '../../constants/constants';
import axios from "axios";
import {Plane} from "react-loader-spinner";
import LanguageButton from '../../components/LanguageButton';

interface TranslationForm {
    from : number,
    word : string
}

export default function Languages() {

    let router = useRouter();
    let t = Util.getLocale(router);
    let translationForm = {} as TranslationForm;
    let actualLanguage : string | undefined = router.locale;
    let indexActualLanguage : number;
    const languages            : Array<string>  = ['pt', 'es', 'it', 'fr', 'en', 'de'];
    let   activeLanguagesArray : Array<boolean> = [false, false, false, false, false, false];
    checkActualLanguage();
    console.log(activeLanguagesArray)
    const [words, setWords] = useState(["","","","","",""]);
    const [contexts, setContexts] = useState(["","","","","",""]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasResult, setHasResult] = useState(false);
    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    const [isDisabled, setIsDisabled] = useState(true);

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        try {
            setIsLoading(true);
            let res = await axios.post('/api/translations', translationForm);
            setIsLoading(false);
            setWords([  cleanWord(res.data?.word.portuguese), cleanWord(res.data?.word.spanish),
                cleanWord(res.data?.word.italian)   , cleanWord(res.data?.word.french),
                cleanWord(res.data?.word.english)   , cleanWord(res.data?.word.german)
            ]);
            setContexts([res.data?.context.portuguese, res.data?.context.spanish,
                res.data?.context.italian, res.data?.context.french,
                res.data?.context.english, res.data?.context.german]);
                setHasResult(true);
            } catch (error) {
                console.log(error);
            }
        }
        
    function handleChange(e : ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        translationForm.word = value;
        setIsDisabled(false);
    }
    
    function cleanWord(word : string) : string {
        let s : string = '';
        if (word.slice(word.length - 2) === ' m')
        s = word.slice(0, word.length - 2);
        else if (word.slice(word.length - 2) === ' f')
        s = word.slice(0, word.length - 2);
        else 
        s = word;
        return s;
    }

    const handleChangeLanguage = (language : string) => {
        router.push(router.asPath, router.asPath, { locale: language });
    }
    
    // Go and check if other languages are selected
    // function selectLanguage(index : number) {
    //     activeLanguagesArray[index] = true;
        // activeLanguagesArray[indexActualLanguage] = false;
        // indexActualLanguage = index;
        // activeLanguagesArray[indexActualLanguage] = true;
        // translationForm.from = indexActualLanguage;
    // }
    
    function checkActualLanguage() : void {
        for(let i = 0; i < languages.length; i++) {
            if(languages[i] == actualLanguage) {
                indexActualLanguage = i;
            }   
        }
        translationForm.from = indexActualLanguage;
        activeLanguagesArray[indexActualLanguage] = true;
    }
        
        
        return (
            <div className={isDarkmode ? styles.translationsContainerDark : styles.translationsContainerLight}>
            {isLoading ?
                <div className={`my-80 sm:my-[40px] ${styles.minW}`}>
                    <Plane />
                </div>
                :
                <div className={`${styles.minW}`}>
                    <p className={utilStyles.title}>{t.languages.title}</p>
                    <p className={utilStyles.subtitle}>{t.languages.subtitle}</p>
                    <div className='w-80 my-10'>
                        <form method="post" onSubmit={handleSubmit}>
                            <label htmlFor="from">{t.languages.from}</label>

                            <div className='flex flex-row'>
                                <LanguageButton id={1} isSelected={activeLanguagesArray[1]} flag={esPic} callback={() => handleChangeLanguage('es')}></LanguageButton>
                                <LanguageButton id={2} isSelected={activeLanguagesArray[2]} flag={itPic} callback={() => handleChangeLanguage('it')}></LanguageButton>
                                <LanguageButton id={3} isSelected={activeLanguagesArray[3]} flag={frPic} callback={() => handleChangeLanguage('fr')}></LanguageButton>
                                <LanguageButton id={4} isSelected={activeLanguagesArray[4]} flag={enPic} callback={() => handleChangeLanguage('en')}></LanguageButton>
                                <LanguageButton id={0} isSelected={activeLanguagesArray[0]} flag={ptPic} callback={() => handleChangeLanguage('pt')}></LanguageButton>
                                <LanguageButton id={5} isSelected={activeLanguagesArray[5]} flag={dePic} callback={() => handleChangeLanguage('de')}></LanguageButton>
                            </div> 
                                                     
                            <label htmlFor="fname">{t.languages.word}</label>
                            <input onChange={handleChange} type="text" id="word" name="word" required={true} 
                                   className="h-11 pl-3 pr-6 text-base border rounded-[15px] bg-white appearance-none focus:shadow-outline text-black"></input>
                            <div className="my-4 d-flex flex-row justify-center">
                                <Button label={t.languages.textButton} type={'submit'} disabled={isDisabled}></Button>
                            </div>
                        </form>
                    </div>
                    { hasResult ? 
                    
                    <div className='flex flex-row flex-wrap justify-center align-center my-8'>
                        <TranslationCard image={ptPic} language={Constants.PT} word={words[0]} phrase={contexts[0]} ></TranslationCard>
                        <TranslationCard image={esPic} language={Constants.ES} word={words[1]} phrase={contexts[1]}></TranslationCard>
                        <TranslationCard image={itPic} language={Constants.IT} word={words[2]} phrase={contexts[2]}></TranslationCard>
                        <TranslationCard image={frPic} language={Constants.FR} word={words[3]} phrase={contexts[3]}></TranslationCard>
                        <TranslationCard image={enPic} language={Constants.EN} word={words[4]} phrase={contexts[4]}></TranslationCard>
                        <TranslationCard image={dePic} language={Constants.DE} word={words[5]} phrase={contexts[5]}></TranslationCard>
                    </div>

                    :

                    ''

                    }
                    
                </div>
            }
        </div>
    );
}



