import headerChild from './HeaderChild.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../redux/hooks';


export type HeaderChildProps = {
    code  : number
    title : string
    page  : string
}

export default function HeaderChild( props : HeaderChildProps ) {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    let [picString, setpicString] = useState('');
    if(props.code === 0){
        if(isDarkmode)
            picString = '/svg/white/language-white.svg';
        else
            picString = '/svg/language.svg';
    }
    if(props.code === 1){
        if(isDarkmode)
            picString = '/svg/white/blog-white.svg';
        else
            picString = '/svg/blog.svg';
    }
    if(props.code === 2){
        if(isDarkmode)
            picString = '/svg/white/services-white.svg';
        else
        picString = '/svg/services.svg';
        
    }

    return (
   
        <div className={ isDarkmode ? headerChild.containerDark : headerChild.containerLight}>
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
     
    );
}