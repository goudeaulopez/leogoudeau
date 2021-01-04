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



/*
  <i className="big images icon ml-3 mr-1"></i>
                <p>{Images}</p>
<div  className="ui raised segment">
            <i className="big youtube icon ml-3 mr-3"></i>
               {Videos}
                <button 
                  onClick={()=>props.selectMenuBar('Videos')}
                  style={{float:'right'}} className="mini ui button primary">{testButtonLanguage}</button>
                
            </div>


<div className="projects"> 
          <h3 id="title">{projects}</h3>
           <div id="firstseg" className="ui raised segment">
                <i className="big images icon"></i>
                <p >{Images}</p>
                
                <button 
                  onClick={()=>props.selectMenuBar('Images')}
                >
                      {testButtonLanguage}
                </button>
                 <br/><br/>
                
           </div>
           <div className="ui raised segment">
          
            <i  style={{paddingLeft:'15px',color:'#969286',marginRight:'30px'}} className="big youtube icon"></i>  {Videos}
                 
               
                <button 
                 onClick={()=>props.selectMenuBar('Videos')}
                id="btndesktop" 
                className="mini ui right floated primary button mr-3">{testButtonLanguage}</button>
                <br/><br/>
           </div>
          
            <br/>
            <br/>
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



*/


