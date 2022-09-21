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
        <div className='container'>
            <h2>Contact Me</h2>
            <div className='row'>
                <form className='form col-6'>
                    <div className='d-flex flex-column mb-2'>
                        <label for='inputName'>Name:</label>
                        <input
                            id='inputName'
                            value={userName}
                            name='userName'
                            onChange={handleInputChange}
                            type='text'
                        />
                    </div>
                    <div className='d-flex flex-column mb-2'>
                        <label for='email'>Email address:</label>
                        <input
                            id='email'
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                        />
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <label for='message'>Message:</label>
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