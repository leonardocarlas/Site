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
import table from '../../mock/table.json';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';
import { Constants } from '../../constants/constants';
import axios from "axios";
import {Circles} from "react-loader-spinner";

export default function Languages() {

    let router = useRouter();
    let t = Util.getLocale(router);
    const [form, setForm] = useState({
        from : "1",
        word : ''
    });
    const [words, setWords] = useState(["","","","","",""]);
    const [contexts, setContexts] = useState(["","","","","",""]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        try {
            setIsLoading(true);
            let res = await axios.post('/api/translations', form);
            setIsLoading(false);
            setWords([res.data?.word.portuguese, res.data?.word.spanish,
                            res.data?.word.italian, res.data?.word.french,
                            res.data?.word.english, res.data?.word.german]);
            setContexts([res.data?.context.portuguese, res.data?.context.spanish,
                        res.data?.context.italian, res.data?.context.french,
                        res.data?.context.english, res.data?.context.german]);
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={isDarkmode ? styles.translationsContainerDark : styles.translationsContainerLight}>
            <p className={utilStyles.title}>{t.languages.title}</p>
            <p className={utilStyles.subtitle}>{t.languages.subtitle}</p>
            <div className='w-80 my-10'>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="from">{t.languages.from}</label>
                    <select onChange={handleChange} id="from" name="from" value={form.from}
                    className="h-11 pl-3 pr-6 text-base border rounded-[15px] bg-white appearance-none focus:shadow-outline text-black" >
                        <option value={0}>Portuguese</option>
                        <option value={1}>Spanish</option>
                        <option value={2}>Italian</option>
                        <option value={3}>French</option>
                        <option value={4}>English</option>
                        <option value={5}>German</option>
                    </select>
                    <label htmlFor="fname">Word</label>
                    <input onChange={handleChange} type="text" id="word" name="word" required={true}
                           className="h-11 pl-3 pr-6 text-base border rounded-[15px] bg-white appearance-none focus:shadow-outline text-black"></input>
                    <div className="my-4 d-flex flex-row justify-center">
                        <Button label={t.languages.textButton} type={'submit'}></Button>  
                    </div>
                </form>
            </div>
            <div className='flex flex-row flex-wrap justify-center align-center my-8'>
                <TranslationCard image={ptPic} language={Constants.PT} word={words[0]} phrase={contexts[0]} ></TranslationCard>
                <TranslationCard image={esPic} language={Constants.ES} word={words[1]} phrase={contexts[1]}></TranslationCard>
                <TranslationCard image={itPic} language={Constants.IT} word={words[2]} phrase={contexts[2]}></TranslationCard>
                <TranslationCard image={frPic} language={Constants.FR} word={words[3]} phrase={contexts[3]}></TranslationCard>
                <TranslationCard image={enPic} language={Constants.EN} word={words[4]} phrase={contexts[4]}></TranslationCard>
                <TranslationCard image={dePic} language={Constants.DE} word={words[5]} phrase={contexts[5]}></TranslationCard>
            </div>
        </div>
    );
}
