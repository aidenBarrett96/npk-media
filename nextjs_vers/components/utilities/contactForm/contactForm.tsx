import React, { FC, useState, useRef, useEffect } from 'react';
import cStyle from './contactForm.module.scss';
import Button from '../button/button';
import Link from 'next/link';
import { useGetViewportWidth } from '../../../hooks/viewport';
import { useValidation } from './validation';


interface ContactFormProps {

}

const ContactForm:FC<ContactFormProps> = () => {

	const formRef = useRef();


	// hold the input values within the component state
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	// Form submit in api route will either give status 200 or 400
	// If error status, show on frontend that it has failed
	// otherwise change to the 'success' slide
	const [status, setStatus] = useState({
		submitting: false,
    info: { 
			sgError: false, 
			msg: null 
		}
  })

	const { errorList, totalErrors } = useValidation(values);

	const [showErrors, setShowErrors] = useState(false);

	// Hold the current slide within the component state
	const [slide, setSlide] = useState(1);

	// Handler for inputing the form fields to state
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

	

	// Form proccesser
	const processForm = (form) => {
		if (totalErrors) {
			setShowErrors(true);
		} else {
			handleSubmit()
		}
	};

	// Send form data as json to the api endpoint
	const handleSubmit = async () => {
		setStatus({
			submitting: true,
			info: {
				sgError: false,
				msg: null
			}
		})
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
		})
		const errMsg = await res.text();
		handleResponse(res.status, errMsg)
	}

	// API response. If good, go to next slide, otherwise show error message
	const handleResponse = (status, msg) => {
		if (status === 200) {
			setStatus({
				submitting: false,
				info: {
					sgError: false,
					msg: null,
				}
			})
			nextSlide()

		} else {
			setStatus({
				submitting: false,
				info: { sgError: true, msg: msg}
			})
					
		}
	}


	const { isDesktop } = useGetViewportWidth();

	const containerStyle = {
		height:
			slide === 1
				? '300px'
				: slide === 2
				? isDesktop
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
						{status.submitting && (
							<div className={cStyle.submitting}>Submitting...</div>
						)}
						{status.info.sgError && (
							<div className={cStyle.errorMsg}>Error: {status.info.msg}</div>
						)}
					<form name='contact' ref={formRef}>
						<input type='hidden' name='form-name' value='contact' />
						<label>
							<p style={{textAlign: 'left'}}>Tell us what you're looking for:</p>
							<textarea
								name='message'
								value={values.message}
								onChange={handleChange}
								placeholder='Type here...'
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
					<Link href='/our-team'><a>Meet the team</a></Link>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;



/* Where used: 
1. contact page
*/