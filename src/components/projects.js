import React from 'react'
import '../styles/projects.css'

const Projects = props => {
    const testButtonLanguage = props.language === 'english'? 'try out' : 'ver demo'
    const Images = props.language === 'english'? 'Images' : 'Imagenes'
    const Videos = props.language === 'english'? 'Videos' : 'Videos'
    const Validations = props.language === 'english'? 'Validations':'Validaciones'
    const Weather = props.language === 'english' ? 'Weather':'Tiempo'
    const projects = props.language === 'english' ? 'Projects':'Projectos'
    const imagesText = props.language === 'english'
    ?
     'Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam'
    :
    'Esto esta en espanol tristique senectus et netus etmalesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam'
   
    return(
        <div className="projects"> 
          <h3 id="title">{projects}</h3>
          <div id="firstseg" className="ui raised segment">
                <h4 style={{paddingLeft:'10px'}}>{Images}</h4>
                 <img  src="/1265060_673310719365614_1302370417_o.jpg" alt="imsssage" className="ui tiny left floated image m-3"/>
                 <p className="p-3">{imagesText}</p> 
                <button 
                  onClick={()=>props.selectMenuBar('Images')}
                  id="btndesktop" 
                  className="mini ui right floated primary button mr-3">
                      {testButtonLanguage}
                </button>
                 <br/><br/>
                
           </div>
           <div className="ui raised segment">
            <h4 style={{paddingLeft:'10px'}}>{Videos}</h4>
           <img  src="/1265060_673310719365614_1302370417_o.jpg" alt="imagess" className="ui tiny right floated image m-3"/>
                 
                 <p className="p-3">Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                     eu libero sit amet quam egestas semper. Aenean ultricies mi
                      vitae est. Mauris placerat eleifend leo.
                </p>
                <button 
                 onClick={()=>props.selectMenuBar('Videos')}
                id="btndesktop" 
                className="mini ui left floated primary button ml-3">{testButtonLanguage}</button>
                <br/><br/>
           </div>
           <div className="ui raised segment">
               <h4 style={{paddingLeft:'10px'}}>{Validations}</h4>
                 <img  src="/1265060_673310719365614_1302370417_o.jpg" alt="imasssge" className="ui tiny left floated image m-3"/>
                 <p className="p-3">Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                     eu libero sit amet quam egestas semper. Aenean ultricies mi
                </p>
                <button
                 onClick={()=>props.selectMenuBar('Validations')}
                id="btndesktop" className="mini ui right floated primary button ml-3">{testButtonLanguage}</button>
                <br/><br/>
           </div>
           <div className="ui raised segment mb-2">
           <h4 style={{paddingLeft:'10px'}}>{Weather}</h4>
           <img  src="/1265060_673310719365614_1302370417_o.jpg" alt="imasssge" className="ui tiny right floated image m-3"/>
                
                 <p className="p-3">Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                     eu libero sit amet quam egestas semper. Aenean ultricies mi
                      vitae est. Mauris placerat eleifend leo.
                </p>
                <button 
                 onClick={()=>props.selectMenuBar('Weather')}
                id="btndesktop" className="mini ui left floated primary button  ml-3">{testButtonLanguage}</button>
                <br/><br/>
            </div>
            <br/>
            <br/>
        </div>
    )
}
export default Projects



/*
const projectsLanguage = props.language === 'english' ? <ProjectsEnglish/> : <ProjectsSpanish/>
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

<button className="mini ui primary right floated button mt-3">try out</button>


*/