import React from 'react'
import FormContact from './formContact'
import '../styles/contact.css'

class Contact extends React.Component {
    render(){
       
    return(
        <div>
            <div className="contactDesktop">
              
                 <FormContact language={this.props.language}/>
            </div>
            <div className="contactMobile">
                
                 <FormContact language={this.props.language}/>
            </div>
       </div>
    )
  }
}
export default Contact

