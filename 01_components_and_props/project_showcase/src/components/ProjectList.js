import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({projects}) => {
  //  console.log(projects)
  return(
    <section>
      <h2>Projects</h2>

      <div className='filter'>
        <button>All</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Ruby</button>
        <button>Rails</button>
      </div>

      <ul className='cards'>
        {projects.map(project => {
          return <ProjectListItem key={project.id} project={project}/>
        })}
      </ul>
    </section>
  )
}

export default ProjectList;
