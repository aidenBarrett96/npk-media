import React from 'react'
import './contactBlock.scss'
import Button from '../button/button'
import telephone from '../../images/telephone.png'
import logoLineDrawing from '../../images/logo-line-drawing.png'
import email from '../../images/email.png'

// Contact block component
const ContactBlock = () => (
    // contact block wrapper
    <div className="contact-block">
        {/* Inner text wrapper */}
        <div className="contact-block-body">
            <h2>Get <strong>in touch.</strong></h2>
            <p>Anybody home? Drop us a line and we’ll get back to you within a day.</p>
            <Button color="red">Let's Colaborate</Button>
        </div>
        {/* Icons section */}
        <div className="icons-section">
            <img src={email} alt="Email line drawing icon" />
            <img src={logoLineDrawing} alt="Logo line drawing icon" />
            <img src={telephone} alt="Telephone line drawing icon" />
        </div>
    </div>
)

export default ContactBlock