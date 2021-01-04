import React from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../styles/simpleForm.css'


class SimpleForm  extends React.Component{
    
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
    onSubmit = formvalue => {
       this.props.onList(formvalue);
    }
    render(){
       const firstname = this.props.language === 'english'? 'FirstName':'Nombre'
       const firstPH = this.props.language === 'english'? 'Enter your firstname':'Ingrese su nombre'
       const lastname = this.props.language === 'english'? 'LastName':'Apellido'
       const lastPH = this.props.language === 'english'? 'Enter your lastname':'Ingrese su apellido'
       const mobile = this.props.language === 'english'? 'Mobile Number':'Numero telefonico'
       const mobileph = this.props.language === 'english'? 'Enter your mobile':'Ingrese su mobile'
       const email = this.props.language === 'english'? 'EmailAddress':'Correo electronico'
       const emailph = this.props.language === 'english'? 'Enter your email':'Ingrese su email'
       const about = this.props.language === 'english'? 'About you':'Acerca de ti'
       const aboutph = this.props.language === 'english'? 'Please say something':'Porfavor diga algo'
        return(
            <div className="simpleform">
                
               <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form ">
               <h4 className="ui dividing header left aligned pb-2">{this.props.title}</h4>
               <div className="two fields">
                   
                    <Field
                        name="firstname"
                        label={firstname}
                        placeholder={firstPH}
                        component={this.inputname}
                       
                    />
                    <Field
                        name="lastname"
                        label={lastname}
                        placeholder={lastPH}
                        component={this.inputname}
                        
                    />
                 </div>
                 <div className="two fields">
                    <Field
                       name="phone"
                       label={mobile}
                       placeholder={mobileph}
                       component={this.inputcontact}
                      
                    />
                    <Field
                      name="email"
                      label={email}
                      placeholder={emailph}
                      component={this.inputcontact}
                    
                    />
                  </div>
                    <Field
                        name="description"
                        label={about}
                        placeholder={aboutph}
                        component={this.inputdescription}
                       
                    />
                    <button type="submit" 
                           className="ui button" 
                           >{this.props.create} </button>
               </form>
            </div>
        )
    }
}

const validate =(formvalue) => {
    const error = {}
    if( !formvalue.firstname ){
        error.firstname = "firstname is required"
    }
    if( !formvalue.lastname ){
        error.lastname = "lastname is required"
    }
    if(!formvalue.email){
        error.email = "email is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formvalue.email)){
        error.email = "enter a valid email address"
    }
    if(!formvalue.phone){
        error.phone = "phone is required"
    }
    else if(!/^04[0-9]{8}/i.test(formvalue.phone)){
        error.phone="enter a valid mobile number 04xxxxxxx"
    }
    if(!formvalue.description){
        error.description = "description is required"
    }
    else if(formvalue.description.length < 50){
        error.description = "Description must have at least 50 characteres"    
    }
    return error;
}

export default reduxForm({
  form:'form2',
  validate
})(SimpleForm)

