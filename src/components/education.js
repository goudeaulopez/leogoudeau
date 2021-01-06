import React from 'react'
import '../styles/education.css'

const Education = props => {
    const aboutLanguage = props.language === 'english' ? <AboutEnglish/> : <AboutSpanish/>
    const educations = props.language === 'english' ? 'Education':'Educacion'
   
    return(
        <div className="education">
         <h3 id="h3">{educations}</h3>
         {aboutLanguage}
          <br/><br/>
        </div>
    )
}
export default Education

const AboutSpanish = () => {
    
    return(
        <div>
             
            <div id="uisegment" className="ui segment">
                <p>Certificado IV, Programacion</p>
                <p>TAFE NSW Petersham</p>
                <p>Graduado en 2017</p>
            </div>
            <div id="uisegment" className="ui segment">
                <p>Diploma, Desarrollo de Programas</p>
                <p>TAFE NSW Petersham</p>
                <p>Graduado in 2018</p>
            </div>
            <div id="uisegment" className="ui segment">
                <p>Diploma Avanzado, Tecnologia de Informacion</p>
                <p>TAFE NSW Petersham</p>
                <p>2019-presente</p>
            </div>
            <h3 id="keySkills">Habilidades</h3>
            <div className="ui stacked segments">
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>React</p>
              </div>
              <div className="ui segment">
                <p>Asp.net</p>
              </div>
              <div className="ui segment">
                <p>C#</p>
              </div>
              <div className="ui segment">
                <p>javascript</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>ReactNative</p>
              </div>
              <div className="ui segment">
                <p>Express.js</p>
              </div>
              <div className="ui segment">
                <p>Html</p>
              </div>
              <div className="ui segment">
                <p>Css</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>Bootstrap</p>
              </div>
              <div className="ui segment">
                <p>Semantic-ui</p>
              </div>
              <div className="ui segment">
                <p>Animate.js</p>
              </div>
              <div className="ui segment">
                <p>Linq</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>Git</p>
              </div>
              <div className="ui segment">
                <p>Github</p>
              </div>
              <div className="ui segment">
                <p>Aws</p>
              </div>
              <div className="ui segment">
                <p>JQuery</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>MsSql</p>
              </div>
              <div className="ui segment">
                <p>MongoDB</p>
              </div>
              <div className="ui segment">
                <p>Agile</p>
              </div>
              <div className="ui segment">
                <p>D3</p>
              </div>
            </div>
            </div>
        </div>
    )
}
const AboutEnglish = () => {
    return(
        <div>
            <div id="uisegment" className="ui segment">
                <p>Certificate IV, Programming</p>
                <p>TAFE NSW Petersham</p>
                <p>Graduate in 2017</p>
            </div>
            <div id="uisegment" className="ui segment">
                <p>Diploma, Software Development</p>
                <p>TAFE NSW Petersham</p>
                <p>Graduate in 2018</p>
            </div>
            <div id="uisegment" className="ui segment">
                <p>Advance Diploma, Information Technology</p>
                <p>TAFE NSW Petersham</p>
                <p>2019-Current</p>
            </div>
            <h3 id="keySkills">Key skills</h3>
            <div className="ui stacked segments">
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>React</p>
              </div>
              <div className="ui segment">
                <p>Asp.net</p>
              </div>
              <div className="ui segment">
                <p>C#</p>
              </div>
              <div className="ui segment">
                <p>javascript</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>Azure</p>
              </div>
              <div className="ui segment">
                <p>Animate.js</p>
              </div>
              <div className="ui segment">
                <p>Html</p>
              </div>
              <div className="ui segment">
                <p>ReactNative</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>Agile</p>
              </div>
              <div className="ui segment">
                <p>Semantic-ui</p>
              </div>
              <div className="ui segment">
                <p>Github</p>
              </div>
              <div className="ui segment">
                <p>Linq</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>Git</p>
              </div>
              <div className="ui segment">
                <p>Express.js</p>
              </div>
              <div className="ui segment">
                <p>Aws</p>
              </div>
              <div className="ui segment">
                <p>Css</p>
              </div>
            </div>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <p>MsSql</p>
              </div>
              <div className="ui segment">
                <p>MongoDB</p>
              </div>
              <div className="ui segment">
                <p>Bootstrap</p>
              </div>
              <div className="ui segment">
                <p>D3</p>
              </div>
            </div>
            </div>
           
        </div>
    )
}



