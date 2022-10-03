import React from 'react';
import ProjectCard from '../ProjectCard';
import Projects from '../Projects';

function Portfolio() {
    return (
        <div>
            <h1 className='text-center pb-4'>Portfolio Page</h1>
            <div className='row row-cols-1 row-cols-md-2 p-3 m-0'>
                {Projects.map(Project => {
                    return <ProjectCard Project={Project} key={Project.id} />
                })}
            </div>
        </div>
    );
}

export default Portfolio;