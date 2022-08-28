import React from 'react';

const styles = {
    portrait: {
        float: 'left',
        height: '450px',
        margin: '0 25px 25px 0',
        borderRadius: '10px',
    },
    bio: {
        textIndent: '35px',
    },
};

const images = {
    image: process.env.PUBLIC_URL + '/assets/images/Portrait.png'
}

function About() {
    return (
        <div className='p-5 pt-0'>
            <h2 className='mb-4 text-center'>A Bit About Myself</h2>
            <img src={images.image} alt='Brice Veyna Portrait' style={styles.portrait}></img>
            <div style={styles.bio}>
                <p>
                    Hello and welcome to my portfolio! My name is Brice Veyna. I'm originally from Visalia, California and am currently living close to home in the Tulare countryside. My career journey into the world of software systems and technologies is kind of a long and meandering one.
                </p>

                <p>
                    From a young age I have worked with my mom, painting large public murals across the western US.
                </p>

                <p>
                    I then recieved my BS in Mechanical Engineering with a minor in Geography. Through the course of the program I was exposed to various machine interfacing and analysis software programs and languages. Additionally, the focus of my minor was Geographic Information Systems (GIS) and I worked as a student Research Assistant to my professor and created a prototype spatial-historical archive for the history of Fresno County.
                </p>

                <p>
                    Upon graduation I decided to further enhance my hands-on understanding of mechanical components and apprenticed/worked as CNC Machinist. While working there, I build a home hobby CNC router table as well and did several art projects with it. Through this I came to better understand machine interfacing software, as well as a proficient machinist and a better engineer.
                </p>

                <p>
                    I then accepted a position as a consulting Mechanical Design Engineer in the Siouxland region of South Dakota / Iowa.
                </p>

            </div>
        </div>
    );
}

export default About;