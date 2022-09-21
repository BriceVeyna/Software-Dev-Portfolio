import React from 'react';

function ProjectCard(props) {
    return(
        <div className='col ml-4 mb-4'>
            <div className='card'>
                <img src={props.Project.image} alt={props.Project.projectName}></img>
                <div className='card-body'>
                    <a href={props.Project.deployedURL} className='h1'>{props.Project.projectName}</a>
                    <a href={props.Project.githubURL} className='p-4'><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github' height={50}></img></a>
                    <p>{props.Project.techStack}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
