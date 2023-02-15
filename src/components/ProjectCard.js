import React from 'react';

const styles = {
    card: {
        boxShadow: '1px 1px 10px #000000'
    },
};

function ProjectCard(props) {

    function changeImage(event) {
        event.currentTarget.src = props.Project.image2;
        event.target.style.opacity = '75%';
    }

    function restoreImage(event) {
        event.currentTarget.src = props.Project.image1;
        event.target.style.opacity = '100%';
    }

    return(
        <div className='col ml-4 mb-4'>
            <div className='card' style={styles.card}>
                <img src={props.Project.image1} alt={props.Project.projectName} onMouseOver={changeImage} onMouseLeave={restoreImage}></img>
                <div className='card-body'>
                    <div className='mb-2'>
                        <a href={props.Project.deployedURL} className='h1 align-middle'>{props.Project.projectName}</a>
                        <a href={props.Project.githubURL} className='p-4'><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github' height={50}></img></a>
                    </div>
                    <p>{props.Project.techStack}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
