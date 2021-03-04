import React, {FC} from 'react';
import style from './contactSection.module.scss';
import Button from '../button/button';

interface ContactSectionProps {
	text: string
}

const ContactSection:FC<ContactSectionProps> = ({ text }) => (
	<div className={style.container}>
		{text && <h2>{text}</h2>}
		<Button large link='/contact' text='Get in touch' />
	</div>
);

export default ContactSection;


/* Where used: 
1. Single blog posts
2. Main blog page
*/