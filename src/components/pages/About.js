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
                    Hello and welcome to my portfolio! My name is Brice Veyna, I'm a Full-Stack Developer and Mechanical Design Engineer. I'm originally from Visalia, California and am currently living close to home in the Tulare countryside. My career journey into the world of software systems and technologies is a rather unusual one, though I've picked up many useful skills along the way. My prior experience includes being a Mechanical Design Engineer, a CNC Machinist, a Dairy Trial Administrator, a GIS Research Assistant, and a Muralist. Through these I have gained a balance of technical and artistic experience to draw upon and a passion for learning more. 
                </p>

                <p>
                    From a young age I have worked with my mom, painting large public murals across the western US. As I got older, I got more involved in the design and business processes as well. I eventually set up an e-commerce store for the company through a third-party site, which has been an expanding source of revenue. Additionally, I have further plans to modernize the company website that has not been updated in 12 years.
                </p>

                <p>
                    I then recieved my Bachelor of Science in Mechanical Engineering with a Minor in Geography at California State University, Fresno. Through the course of the program I was exposed to various machine interfacing and engineering analysis software programs and languages. Additionally, the focus of my minor was Geographic Information Systems (GIS) and I worked as a Research Assistant to my professor and created a prototype spatial-historical archive with data visualizations mapping the history of Fresno County as part of a grant proposal.
                </p>

                <p>
                    Upon graduation I decided to further enhance my hands-on understanding of machines and mechanical components and apprenticed/worked as CNC Machinist. While working there, I build a large home hobby CNC router table as well and did several art projects with it. Through this I came to better understand machine interfacing software, as well as a proficient machinist and a better engineer.
                </p>

                <p>
                    Near the end of my time working at the machine shop, I also took on another job as a part-time Trial Administrator on a large dairy pharmaceutical trial. I was paired with the Lead Veterinarian and jointly responsible for administering the trial and collecting field data. Throughout the trial I gain first-hand experience with how data is actually collected, scientific and data analysis procedures, and double-blind trials and how they are put together from planning through to execution. 
                </p>

                <p>
                    I then accepted a position as a consulting Mechanical Design Engineer in the Siouxland region of South Dakota / Iowa. I learned the flow of physical systems, how components interact, how assemblies and subassemblies can be modularized for use in multiple locations, and I understand how this can be applied to software design.
                </p>

            </div>
        </div>
    );
}

export default About;