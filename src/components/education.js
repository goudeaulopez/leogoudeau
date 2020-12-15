import React from 'react'

const Education = props => {
    const aboutLanguage = props.language === 'english' ? <AboutEnglish/> : <AboutSpanish/>
    return(
        <div style={{textAlign:'center',paddingTop:'10%'}}>
         {aboutLanguage}
        </div>
    )
}
export default Education

const AboutSpanish = () => {
    return(
        <div>
          educacion
       </div>
    )
}
const AboutEnglish = () => {
    return(
        <div>
          education
        </div>
    )
}