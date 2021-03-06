import React from 'react'
import { Field,reset,reduxForm} from 'redux-form'
import Recaptcha from 'react-invisible-recaptcha'
import * as emailjs from 'emailjs-com'
import '../styles/formcontact.css'

class FormContact extends React.Component{
    state={messageSent:false }
    onResolved= () =>{
    this.setState({messageSent:true})
   }
    renderError(meta){

        if( meta.error && meta.touched ){
            return(
                <div>
                    <div style={{color:'red'}}>{meta.error}</div>
                </div>
            )
        }
    }
    inputname = formvalue => {
        const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
        const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
         return(
             <div className="field">
                 <label className={classlabel}>{formvalue.label}</label>
                 <input {...formvalue.input} placeholder={formvalue.placeholder} className={classinput} autoComplete="off"/>
                 {this.renderError(formvalue.meta)}
             </div>
         )
    }
    inputcontact = formvalue => {
        
        const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
        const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
        return(
            <div className="field">
                 <label className={classlabel}>{formvalue.label}</label>
                 <input {...formvalue.input} 
                        placeholder={formvalue.placeholder} 
                        className={classinput} 
                        autoComplete='off'/>
                 {this.renderError(formvalue.meta)}
            </div>
        )
    }
    inputdescription = formvalue => {
        const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
        const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
        return(
            <div className="field">
                <label className={classlabel}>{formvalue.label}</label>
                <textarea {...formvalue.input} placeholder={formvalue.placeholder} className={classinput}/>
                {this.renderError(formvalue.meta)}
            </div>
        )
    }  
    onSubmit = (formvalue,dispatch) => {
        
        console.log(formvalue)
        this.props.setMessageSent(true)
        const REACT_APP_ServiceId = process.env.REACT_APP_ServiceId
        const REACT_APP_TemplateId = process.env.REACT_APP_TemplateId
        const REACT_APP_UserId = process.env.REACT_APP_UserId
        const templateParams = {
            from_name: formvalue.firstname,
            from_email: formvalue.email,
            subject:'Nuevo mensaje',
            message_html: formvalue.description
          };
          emailjs.send(
            REACT_APP_ServiceId ,
            REACT_APP_TemplateId,
            templateParams,
            REACT_APP_UserId 
          )
            
       
        
        dispatch(reset('form1'))
    }
    render(){
       const firstname= this.props.language === 'english' ? 'Fullname':'Nombre Completo'
       const firstnamePH= this.props.language === 'english' ? 'Enter your full name': 'Ingrese su nombre completo'
       const CorreoElectronico= this.props.language === 'english' ? 'Email Address': 'Correo Electronico'
       const CorreoElectronicoPH= this.props.language === 'english' ? 'Enter your email address': 'Ingrese su correo electronico'
       const Mensaje= this.props.language === 'english' ? 'Message':'Description'
       const MessagePH = this.props.language === 'english' ? 'Please enter a description':'Por favor escriba su mensaje'
       const Submit =this.props.language === 'english' ? 'Submit':'Enviar'
      
      // const confirmation = this.props.language === 'english'?'Message sent':'Mensage enviado'

      const recaptcha = process.env.REACT_APP_reCaptcha
    
      return(
            <div>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form m-3">
               <div className="field">
                   <Field
                        name="firstname"
                        label={firstname}
                        placeholder={firstnamePH}
                        component={this.inputname}
                    />
                </div>
                 <div className="field">
                   <Field
                      name="email"
                      label={CorreoElectronico}
                      placeholder={CorreoElectronicoPH}
                      component={this.inputcontact}
                    />
                  </div>
                    <Field
                        name="description"
                        label={Mensaje}
                        placeholder={MessagePH}
                        component={this.inputdescription}
                    />
                    <button type="submit" 
                           className="ui button" 
                           onClick={this.handleSubscribe}
                    >{Submit}</button>  
                    
               </form>
              
            
                <div className="contactmeMobile">
                  <p id="pMobile">{this.props.language === 'english' ?'you can also call or message me on': 'puedes llamarme o mandame un whatapp'}</p>
                  <a  href="https://api.whatsapp.com/send?phone=610426121161"><i id="iwhatsapp" className="whatsapp icon"></i></a>
                  <a  href="tel:+610426121161"><i id="iphoneIcon"  className="phone icon"></i> </a> 
                  <br/><br/>
                </div>
                <div className="contactmeDesktop">
                            <p>{this.props.language === 'english' ?' call or message me on': 'llamarme o mandame un whatapp'}</p>
                            <a  style={{color:'#25252b',textDecoration:'none'}} href="https://api.whatsapp.com/send?phone=610426121161"><i style={{color:'#34eb3a'}} id="whatapp" className="whatsapp icon"></i>+61 0426121161</a>
                            <a  style={{color:'#25252b',textDecoration:'none'}} href="tel:+610426121161"><i style={{color:'#25252b'}} id="phoneicon"  className="phone icon"></i>+61 0426121161 </a> 
                            
                      </div>
                
                <Recaptcha
                    ref={ref=>this.Recaptcha=ref}
                    sitekey= {recaptcha}
                    onResolved={this.onResolved}
                />  
              </div>
        )   
    }
}
const validate =(formvalue) => {
    
    const error = {}
 
    if( !formvalue.firstname ){
       error.firstname = 'firstname required/ nombre es requerido'
    }
    if(!formvalue.email){
        error.email = "email is required /correo electronico es requerido"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formvalue.email)){
        error.email = "type a valid email address /ingrese un correo electronico valido"
    }
    if(!formvalue.description){
        error.description = "message is required/mensaje es requerido"
    }
    else if(formvalue.description.length < 4){
        error.description = "el mensaje debe tener al menos 4 characteres"    
    }
    return error;
}
export default reduxForm({
    form:'form1',
    validate
})(FormContact)

