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
        <div>
            <h2>Contact Page</h2>
            <form className='form'>
                <input
                    value={userName}
                    name='userName'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                />
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='email'
                />
                <input
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Message'
                />
                <button type='button' onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;