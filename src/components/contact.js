import React from 'react'
import FormContact from './formContact'
import '../styles/contact.css'

class Contact extends React.Component {
    render(){
     const contact = this.props.language === 'english' ? 'Contact me': 'Contactame'
     const messageSentt = this.props.language === 'english' ? 'Message Sent': 'Mensaje enviado'
     const messageDesktop = !this.props.messageSent? <h3 className='pl-3'>{contact}</h3> : 
                                                    <div  onClick={ ()=>this.props.selectMenuBar('') } id="messageDesktop">{messageSentt}
                                                    <i style={{color:'white'}} className="window close icon"></i></div>
     const messageMobile = !this.props.messageSent?'':<div id="messageMobile" 
                                                       onClick={ ()=>this.props.selectMenuBar('') }>{messageSentt}
                                                       <i style={{color:'white'}} className="window close icon"></i></div>
 
    return(
        <div>
            <div className="contactDesktop">
                 {messageDesktop}
                 <FormContact language={this.props.language} setMessageSent={this.props.setMessageSent}/>
            </div>
            <div className="contactMobile">
                 {messageMobile}
                 <FormContact language={this.props.language} setMessageSent={this.props.setMessageSent}/>
            </div>
       </div>
    )
  }
}
export default Contact



