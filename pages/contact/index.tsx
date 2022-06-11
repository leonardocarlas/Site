import Image from "next/image";
import styles from './Contact.module.scss';
import coffee from '../../public/svg/coffee.svg';
import coffeeWhite from '../../public/svg/white/coffee-white.svg';
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import utilStyles from '../../styles/utils.module.scss';
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../redux/hooks";
import { Util } from "../../utils/util";

export default function Contact() {

    const router = useRouter();
    let t = Util.getLocale(router);
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }
    
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/contact', form);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
        }
    }

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (

        <div className={isDarkmode ? styles.sectionDark : styles.sectionLight}>

            { success ?
                <div className={`text-black d-flex flex-col justify-center text-center p-4 bg-green-400`}>
                    <p>{t.contact.mailSuccess}</p>
                    <button className='underline block' onClick={() => {setSuccess(false)}}>{t.contact.mailSuccess}</button>
                </div>
                :
                ''
            }
            { failure ?
                <div className={`text-black d-flex flex-col justify-center text-center p-4 bg-red-500`}>
                    <p>{t.contact.mailSuccess}</p>
                    <button onClick={() => {setFailure(false)}}>{t.contact.mailSuccessButton}</button>
                </div>
                :
                ''
            }
            
            <div className={utilStyles.column}>
                <p className={utilStyles.title}>{t.contact.title}</p>
                <p className={utilStyles.subtitle}>{t.contact.subtitle}</p>
                <div className={styles.imageContainer}>
                    { isDarkmode ? 
                    <Image src={coffeeWhite} width={100} height={100} alt={'coffee-image'}></Image>
                    :
                    <Image src={coffee} width={100} height={100} alt={'coffee-image'}></Image>
                    }
                    
                </div>
            </div>

            <div className={styles.formContainer}>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="name">{t.contact.nome}</label>
                            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Mario Rossi" required />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="email">{t.contact.email}</label>
                            <input onChange={handleChange} type="email" id="email" name="email" placeholder="mariorossi@gmail.com" required/>
                        </div>
                    </div>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="text">{t.contact.text}</label>
                            <textarea onChange={handleChange} id="text" name="text" placeholder="" required rows={7} cols={50}></textarea>
                        </div>
                    </div>
                    <div className={`${styles.rowForm} my-5 `} >
                        <Button label={t.contact.submit} type={'submit'}></Button>
                    </div>
                </form>
            </div>
        </div>
    
    );
}