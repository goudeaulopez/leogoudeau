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
    }  //service_n71tjuo
    onSubmit = (formvalue,dispatch) => {
        
        console.log(formvalue)
        this.props.setMessageSent(true)
        const templateParams = {
            from_name: formvalue.firstname,
            from_email: formvalue.email,
            subject:'Nuevo mensaje',
            from_number:formvalue.phone,
            message_html: formvalue.description
          };
          emailjs.send(
            'service_n71tjuo' ,
            'template_2tckn8s',
            templateParams,
            'user_RIXJL1RaxVcLJExHUTpGm'
          )
            
       
        
        dispatch(reset('form1'))
    }
    render(){
       const firstname= this.props.language === 'english' ? 'Fullname':'Nombre Completo'
       const firstnamePH= this.props.language === 'english' ? 'Enter your full name': 'Ingrese su nombre completo'
       const NumeroTelefonico= this.props.language === 'english' ? 'Contact Number':'Numero Telefonico' 
       const NumeroTelefonicoPH= this.props.language === 'english' ? 'Enter your Contact number': 'Ingrese su numero telefonico'
       const CorreoElectronico= this.props.language === 'english' ? 'Email Address': 'Correo Electronico'
       const CorreoElectronicoPH= this.props.language === 'english' ? 'Enter your email address': 'Ingrese su correo electronico'
       const Mensaje= this.props.language === 'english' ? 'Message':'Description'
       const MessagePH = this.props.language === 'english' ? 'Please enter a description':'Por favor escriba su mensaje'
       const Submit =this.props.language === 'english' ? 'Submit':'Enviar'
      
      // const confirmation = this.props.language === 'english'?'Message sent':'Mensage enviado'
       //
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
                 <div className="two fields">
                    <Field
                       name="phone"
                       label={NumeroTelefonico}
                       placeholder={NumeroTelefonicoPH}
                       component={this.inputcontact}
                      
                    />
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
             
                <div className="contactmeDesktop">
                  <p id="p">{this.props.language === 'english' ?' call or message me on': 'llamarme o mandame un whatapp'}</p>
                  <a  style={{color:'#25252b',textDecoration:'none'}} href="https://api.whatsapp.com/send?phone=610426121161"><i style={{color:'#34eb3a'}} id="whatapp" className="whatsapp icon"></i>+61 0426121161</a>
                  <a  style={{color:'#25252b',textDecoration:'none'}} href="tel:+610426121161"><i style={{color:'#25252b'}} id="phoneicon"  className="phone icon"></i>+61 0426121161 </a> 
                  
                </div>
                <div className="contactmeMobile">
                  <p id="pMobile">{this.props.language === 'english' ?'you can also call or message me on': 'puedes llamarme o mandame un whatapp'}</p>
                  <a  href="https://api.whatsapp.com/send?phone=610426121161"><i id="iwhatsapp" className="whatsapp icon"></i></a>
                  <a  href="tel:+610426121161"><i id="iphoneIcon"  className="phone icon"></i> </a> 
                  <br/><br/>
                </div>
                <Recaptcha
                    ref={ref=>this.Recaptcha=ref}
                    sitekey='6LdJfAgaAAAAAOry59TJBSDKY6vBSkNinjztEobp'
                    onResolved={this.onResolved}
                />  
               
           </div>
        )   //style={{color:'#25252b'}}
    }
}
const validate =(formvalue) => {
    
    const error = {}
 
    if( !formvalue.firstname ){
       
        error.firstname = 'firstname is required'
    }
    if(!formvalue.email){
        error.email = "correo electronico es requerido"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formvalue.email)){
        error.email = "ingrese un correo electronico valido"
    }
    if(!formvalue.phone){
        error.phone = "numero telefonico es requerido"
    }
    else if(!/^[0-9]*$/i.test(formvalue.phone)){
        error.phone="ingrese un telefono valido"
    }
    if(!formvalue.description){
        error.description = "mensaje es requerido"
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