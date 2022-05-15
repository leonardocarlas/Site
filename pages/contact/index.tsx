import Image from "next/image";

import styles from './Contact.module.scss';
import x from '../../public/svg/x.svg';
import coffee from '../../public/svg/coffee.svg';
import { useRouter } from "next/router";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

export default function Contact() {

    const router = useRouter();
    const [form, setForm] = useState({});

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }
    
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/contact', form);
            alert('Success');
        } catch (error) {
            alert('An error occurred. Please try again');
        }
    }

    return (
        <>
            <div className={styles.row}>
                <div className={styles.imageContainer} onClick={() => {router.push('/', '/')}}>
                    <Image src={x} width={40} height={40}></Image>
                </div>
            </div>

            <div className={styles.column}>
                <p>Write me. I will text you back</p>
                <p>asking to take a coffee together</p>
                <div className={styles.imageContainer}>
                    <Image src={coffee} width={100} height={100}></Image>
                </div>
            </div>

            <form action="/api/contact" method="post">
                <label htmlFor="first">Name</label>
                <input onChange={handleChange} type="text" id="first" name="first" placeholder="Mario Rossi" required />
                <label htmlFor="mail">Email</label>
                <input onChange={handleChange} type="email" id="mail" name="mail" placeholder="mariorossi@gmail.com" required/>
                <label htmlFor="text">Text</label>
                <input onChange={handleChange} type="text" id="text" name="text" placeholder="" required/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

