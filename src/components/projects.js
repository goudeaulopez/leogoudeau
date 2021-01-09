import React from 'react'
import '../styles/projects.css'

const Projects = props => {
    const testButtonLanguage = props.language === 'english'? 'try out' : 'ver demo'
    const Images = props.language === 'english'? 'Images ' : 'Imagenes'
    const Videos = props.language === 'english'? 'Videos' : 'Videos'
    const Validations = props.language === 'english'? 'Validations 1':'Validaciones 1'
    const Weather = props.language === 'english' ? 'Weather':'Tiempo'
    const projects = props.language === 'english' ? 'Projects':'Projectos'
    
    return(
        <div className="projects" >
           <h4 id="title">{projects}</h4>
           <div  className="ui raised segment">
            <i className="big cloud icon ml-3 mr-3"></i>
               {Weather}
                <button 
                  onClick={()=>props.selectMenuBar('Weather')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>
           <div  className="ui raised segment">
            <i className="big wpforms icon ml-3 mr-3"></i>
               ReduxForm
                <button 
                  onClick={()=>props.selectMenuBar('ReduxForm')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>
            <div  className="ui raised segment">
            <i className="big images icon ml-3 mr-3"></i>
               {Images}
                <button 
                  onClick={()=>props.selectMenuBar('Images')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>
            <div  className="ui raised segment">
            <i className="big youtube icon ml-3 mr-3"></i>
               {Videos}
                <button 
                  onClick={()=>props.selectMenuBar('Videos')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>
            <div  className="ui raised segment">
            <i className="big th list icon ml-3 mr-3"></i>
               {Validations}
                <button 
                  onClick={()=>props.selectMenuBar('Validations1')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>

           
        </div> 
    )
}
export default Projects


