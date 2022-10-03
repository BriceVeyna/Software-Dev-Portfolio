import React, { useState } from 'react';
import { checkName, checkMessage, validateEmail } from '../../utils/helpers';

function Contact() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!checkName(userName)) {
            setErrorMessage('Name is required.');
            return;
        }
        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid.');
            return;
        }
        if (!checkMessage(message)) {
            setErrorMessage('Message is required.');
            return;
        }
        console.log(errorMessage)
        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container mb-5'>
            <div className='text-center'>
                <h1>Contact Me</h1>
                <h5>If you have any questions, or would like to know more about my work, feel free to send me a message.</h5>
                <h5>Email: briceveyna@gmail.com</h5>
            </div>
            <div className='row justify-content-center mt-4'>
                <form className='form col-8'>
                    <div className='d-flex flex-column mb-2'>
                        <label htmlFor='inputName'>Name*</label>
                        <input
                            id='inputName'
                            value={userName}
                            name='userName'
                            onChange={handleInputChange}
                            type='text'
                        />
                    </div>
                    <div className='d-flex flex-column mb-2'>
                        <label htmlFor='email'>Email Address*</label>
                        <input
                            id='email'
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                        />
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <label htmlFor='message'>Message*</label>
                        <textarea
                            id='message'
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            type='text'
                        />
                    </div>
                    {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                    )}
                    <button type='button' className='btn btn-primary' onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;