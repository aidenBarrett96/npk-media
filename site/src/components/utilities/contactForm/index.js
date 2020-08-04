import React, { useState, useRef } from 'react';
import cStyle from './contactForm.module.scss';
import Button from '../button';
import { Link } from 'gatsby';
import { useWindowSize } from '../../globals/windowSize';
import { useValidation } from './validation';

const initialValues = {
	name: '',
	email: '',
	message: '',
};

const ContactForm = () => {
	// hold the input values within the component state
	const [values, setValues] = useState(initialValues);

	const { errorList, totalErrors } = useValidation(values);

	const [showErrors, setShowErrors] = useState(false);

	// Hold the current slide within the component state
	const [slide, setSlide] = useState(1);

	// Handler for inputing the
	const handleChange = (event) => {
		const { value, name } = event.target;
		setValues({ ...values, [name]: value });
	};

	const nextSlide = () => setSlide(slide + 1);

	const classes = (altSlide) => {
		return altSlide === slide
			? `${cStyle.slide} ${cStyle.active}`
			: altSlide < slide
			? `${cStyle.slide} ${cStyle.old}`
			: cStyle.slide;
	};

	const formRef = useRef();

	// Form proccesser / submitter
	const processForm = (form) => {
		if (totalErrors) {
			setShowErrors(true);
		} else {
			if (typeof FormData !== 'undefined') {
				const data = new FormData(form);
				data.append('form-name', 'contact');
				fetch('/', {
					method: 'POST',
					body: data,
				})
					.then(() => {
						nextSlide();
					})
					.catch((error) => {
						alert(error);
					});
			}
		}
	};

	const { desktop } = useWindowSize();

	const containerStyle = {
		height:
			slide === 1
				? '300px'
				: slide === 2
				? desktop
					? '700px'
					: '650px'
				: '260px',
	};

	return (
		<div className={cStyle.container} style={containerStyle}>
			<div className={classes(1)}>
				<div className={cStyle.inner}>
					<h2>Want to work with us?</h2>
					<p>
						Tell us what you're looking for and one of our humans will get back
						to you within 24 hours.
					</p>
					<Button text='Enquire' large onClick={nextSlide} />
				</div>
			</div>
			<div className={classes(2)}>
				<div className={cStyle.inner}>
					<h2>Enquiry</h2>
					<form name='contact' ref={formRef} method='POST' data-netlify='true'>
						<input type='hidden' name='form-name' value='contact' />
						<label>
							<h3>Tell us what you're looking for:</h3>
							<textarea
								name='message'
								value={values.message}
								onChange={handleChange}
								placeholder='e.g: A social media campaign that puts my product in front of 10,000 potential customers'
							/>
						</label>

						<label>
							<h3>Your name *</h3>
							<input
								name='name'
								value={values.name}
								onChange={handleChange}
								placeholder='John Smith'
							/>
							{showErrors &&
								errorList.name.map((error) => (
									<p className={cStyle.error}>{error}</p>
								))}
						</label>

						<label>
							<h3>Email *</h3>
							<input
								name='email'
								value={values.email}
								onChange={handleChange}
								placeholder='johnsmith@gmail.com'
							/>
							{showErrors &&
								errorList.email.map((error) => (
									<p className={cStyle.error}>{error}</p>
								))}
						</label>
					</form>
					<Button
						text='Submit enquiry'
						large
						onClick={() => processForm(formRef.current)}
					/>
				</div>
			</div>
			<div className={classes(3)}>
				<div className={cStyle.inner}>
					<h2>Enquiry Sent</h2>
					<p>
						We will get back to you within 24 hours. In the meantime, get to
						know us better:
					</p>
					<Link to='/our-team'>Meet the team</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
