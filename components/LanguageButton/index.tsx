import styles from './LanguageButton.module.scss';
import Image from 'next/image';
import { useState } from 'react';

type MyFunctionType = () => {};


interface LanguageButtonProps {
	id: number;
	flag : string;
	isSelected: boolean;
	callback : Function,
} 
export default function LanguageButton(props: LanguageButtonProps){

	// let isSelected = props.isSelected; 
	// function toggleIsSelected() {
	// 	if (isSelected)
	// 		isSelected = false;
	// 	else
	// 		isSelected = true;
	// }
	

	return (
		<div className={props.isSelected ? styles.cardSelected : styles.card } 
			onClick = { 
				() => {
					// toggleIsSelected();
					props.callback();
				}
			}
		>
			<Image src={props.flag} width={25} height={25}></Image>
		</div>
	);
}
