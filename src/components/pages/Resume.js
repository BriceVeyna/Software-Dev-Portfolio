import React from 'react';

function Resume() {
    return (
        <div className='px-5'>
            <h2>Resume Page</h2>
            <a href='/assets/Brice-Veyna-Resume.pdf' download>Download Resume</a>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Foundation</li>
                <li>React</li>
                <li>responsive design</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;