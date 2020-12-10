import React from 'react'

const About = props => {
    const aboutLanguage = props.language === 'english' ? <AboutEnglish/> : <AboutSpanish/>
    return(
        <div style={{textAlign:'center'}}>
         {aboutLanguage}
        </div>
    )
}
export default About

const AboutSpanish = () => {
    return(
        <div>
          description
       </div>
    )
}
const AboutEnglish = () => {
    return(
        <div>
           about
        </div>
    )
}