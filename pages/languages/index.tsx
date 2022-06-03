import Button from '../../components/Button/Button';
import styles from './Languages.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import TranslationCard from '../../components/TranslationCard/TranslationCard';
import esPic from '../../public/svg/flags/es.svg';
import itPic from '../../public/svg/flags/it.svg';
import enPic from '../../public/svg/flags/us.svg';
import dePic from '../../public/svg/flags/de.svg';
import ptPic from '../../public/svg/flags/pt.svg';
import frPic from '../../public/svg/flags/fr.svg';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import * as t from './../../utils/translations';
import table from '../../mock/table.json';
import { useAppSelector } from '../../redux/hooks';

export default function Languages() {

    let languages : Array<string> = ['Portuguese','Spanish','Italian','French','English','German'];

    const [form, setForm] = useState({
        from : "1",
        word : ''
    });

    const [indexWord, setIndexWord] = useState(0);

    function handleSubmit (e : SyntheticEvent) {
        e.preventDefault();
        let max : number = table.words.length - 1;
        let n : number = Math.floor(Math.random() * (max + 1));
        setIndexWord(n);
    }

    function handleChange(e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value }); 
    }

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (

        <div className={isDarkmode ? styles.translationsContainerDark : styles.translationsContainerLight}>

            <p className={utilStyles.title}>Translations Table</p>
            <p className={utilStyles.subtitle}>This is how I try to learn different languages</p>

            <div className='w-80 my-10'>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="from">From</label>
                    <select onChange={handleChange} id="from" name="from" value={form.from}
                    className="h-11 pl-3 pr-6 text-base border rounded-[15px] bg-white appearance-none focus:shadow-outline text-black" >
                        <option value={0}>Portuguese</option>
                        <option value={1}>Spanish</option>
                        <option value={2}>Italian</option>
                        <option value={3}>French</option>
                        <option value={4}>English</option>
                        <option value={5}>German</option>
                    </select>
                                            
                    <div className="my-4 d-flex flex-row justify-center">
                        <Button label={'Random Word'} type={'submit'}></Button>  
                    </div>   
                </form>
            </div>

            <div className='flex flex-row flex-wrap justify-center align-center my-8'>
                <TranslationCard image={ptPic} language={'Portuguese'} word={table.words[indexWord].pt} phrase={table.phrases[indexWord].pt} ></TranslationCard>
                <TranslationCard image={esPic} language={'Spanish'} word={table.words[indexWord].es} phrase={table.phrases[indexWord].es}></TranslationCard>
                <TranslationCard image={itPic} language={'Italian'} word={table.words[indexWord].it} phrase={table.phrases[indexWord].it}></TranslationCard>
                <TranslationCard image={frPic} language={'French'} word={table.words[indexWord].fr} phrase={table.phrases[indexWord].fr}></TranslationCard>
                <TranslationCard image={enPic} language={'English'} word={table.words[indexWord].en} phrase={table.phrases[indexWord].en}></TranslationCard>
                <TranslationCard image={dePic} language={'German'} word={table.words[indexWord].de} phrase={table.phrases[indexWord].de}></TranslationCard>
            </div>
        </div>

    );
}
