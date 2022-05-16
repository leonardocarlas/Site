import Image from "next/image";

import styles from './Contact.module.scss';
import x from '../../public/svg/x.svg';
import coffee from '../../public/svg/coffee.svg';
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import utilStyles from '../../styles/utils.module.scss';
import Button from "../../components/Button/Button";

export default function Contact() {

    const router = useRouter();
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

    return (
        <>
            { success ?
                <div className={styles.successContainer}>
                    <p>The message has been sent correctly, go and check out your inbox.</p>
                    <button onClick={() => {setSuccess(false)}}>Beautiful</button>
                </div>
                :
                ''
            }
            { failure ?
                <div className={styles.failureContainer}>
                    <p>An error occurred. Please try again</p>
                    <button onClick={() => {setFailure(false)}}>Oh, Ok.</button>
                </div>
                :
                ''
            }
            


            <div className={utilStyles.column}>
                <p className={utilStyles.titleBlack}>Write me. I will text you back</p>
                <p className={utilStyles.subtitleBlack}>asking to take a coffee together</p>
                <div className={styles.imageContainer}>
                    <Image src={coffee} width={100} height={100}></Image>
                </div>
            </div>

            <div className={styles.formContainer}>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="name">Name</label>
                            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Mario Rossi" required />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="email">Email</label>
                            <input onChange={handleChange} type="email" id="email" name="email" placeholder="mariorossi@gmail.com" required/>
                        </div>
                    </div>
                    <div className={styles.rowForm}>
                        <div className={styles.formElement}>
                            <label htmlFor="text">Text</label>
                            <textarea onChange={handleChange} id="text" name="text" placeholder="" required rows={7} cols={50}></textarea>
                        </div>
                    </div>
                    <div className={styles.rowForm} >
                        <Button label={'Submit'} type={'submit'}></Button>
                    </div>
                </form>
            </div>

        </>
    );
}



/*

            <div className={styles.row}>
                <div className={styles.imageContainer} onClick={() => {router.push('/', '/')}}>
                    <Image src={x} width={40} height={40}></Image>
                </div>
            </div>

*/