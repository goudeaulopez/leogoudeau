import React from 'react'

const Work = props => {
    const aboutLanguage = props.language === 'english' ? <AboutEnglish/> : <AboutSpanish/>
    return(
        <div style={{textAlign:'center',paddingTop:'10%'}}>
         {aboutLanguage}
        </div>
    )
}
export default Work

const AboutSpanish = () => {
    return(
        <div>
          trabajos
       </div>
    )
}
const AboutEnglish = () => {
    return(
        <div>
           works
        </div>
    )
}