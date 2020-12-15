import React from 'react'

const Projects = props => {
     const projectsLanguage = props.language === 'english' ? <ProjectsEnglish/> : <ProjectsSpanish/>
     return(
        <div style={{textAlign:'center',paddingTop:'10%'}}> 
          {projectsLanguage}
        </div>
    )
}
export default Projects

const ProjectsSpanish = () => {
    return(
        <div>
          projectos
       </div>
    )
}
const ProjectsEnglish = () => {
    return(
        <div>
           projects
        </div>
    )
}