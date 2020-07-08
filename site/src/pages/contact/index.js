import React from 'react';
import Layout from '../../components/layout';
import ContactForm from '../../components/utilities/contactForm';
import pStyle from './contactPage.module.scss';

const ContactPage = () => (
	<Layout>
		{/* contact form */}
		<section>
			<h1 className={pStyle.title}>Get In Touch</h1>
			<ContactForm />
		</section>
		{/* contact information */}
		<section className={pStyle.contactDetails}>
			<div>
				<h2>Contact</h2>
				<a href='mailto:stephen@npkmedia.co.uk'>stephen@npkmedia.co.uk</a>
				<br />
				<a href='tel:01513192439'>(+44) 0151 319 2439</a>
			</div>

			<div>
				<h2>Address</h2>
				<p>
					G40
					<br /> Ayrton house
					<br /> Commerce way
					<br /> Liverpool
					<br /> L8 7BA
				</p>
			</div>

			<div>
				<h2>Social Media</h2>
				<a href=''>Instagram</a>
				<br />
				<a href=''>Facebook</a>
				<br />
				<a href=''>Vimeo</a>
				<br />
			</div>
		</section>
	</Layout>
);

export default ContactPage;
