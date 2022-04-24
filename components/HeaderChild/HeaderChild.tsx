import headerChild from './HeaderChild.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


export type HeaderChildProps = {
    code  : number
    title : string
    page  : string
}

export default function HeaderChild( props : HeaderChildProps ) {

    let [picString, setpicString] = useState('');
    if(props.code === 0){
        picString = '/svg/language.svg';
    }
    if(props.code === 1){
        picString = '/svg/blog.svg';
    }
    if(props.code === 2){
        picString = '/svg/services.svg';
    }

    return (
        <>
            <div className={headerChild.container}>
                <Link href={`/${props.page}`}>
                    <a>
                        <Image
                            src={picString}
                            width={20}
                            height={20}
                            alt={`Image ${props.title}`}
                        />
                        <p>{props.title}</p>
                    </a>
                </Link>
                
            </div>
        </>
    );
}