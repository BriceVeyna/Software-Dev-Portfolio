import React from 'react';
import ProjectCard from '../ProjectCard'
import Projects from '../Projects';

function Portfolio() {
    return (
        <div>
            <h2>Portfolio Page</h2>
            <div className='row row-cols-1 row-cols-md-2 p-5'>
                {Projects.map(Project => {
                    return <ProjectCard Project={Project} key={Project.id} />
                })}
            </div>
        </div>
    );
}

export default Portfolio;