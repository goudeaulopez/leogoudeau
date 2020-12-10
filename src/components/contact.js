import React from 'react'

const Contact = props =>{
    const contactLanguage = props.language === 'english' ? <ContactEnglish/> : <ContactSpanish/>
    return(
        <div style={{textAlign:'center'}}>
          {contactLanguage}
        </div>
    )
}
export default Contact

const ContactSpanish = () => {
    return(
        <div>
          contacto
       </div>
    )
}
const ContactEnglish = () => {
    return(
        <div>
           contact
        </div>
    )
}