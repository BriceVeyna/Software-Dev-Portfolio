import React from 'react';

function ProjectCard(props) {
    return(
        <div className='col ml-4 mb-4'>
            <div className='card'>
                <img src={props.Project.image} alt={props.Project.projectName}></img>
                <div className='card-body'>
                    <a href={props.Project.deployedURL}>{props.Project.projectName}</a>
                    <button><a href={props.Project.githubURL}>test</a></button>
                    <p>{props.Project.techStack}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
