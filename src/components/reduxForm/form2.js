import React from 'react'
import {Field,reduxForm} from 'redux-form'
import '../../styles/form1.css'

class Form2 extends React.Component{
    renderError = values => {
        if(values.error && values.touched)
            return(
                <div>
                    <div className='text text-danger'>{values.error}</div>
                </div>
            )
        }
    
    RenderField = values => {
        const classLabel = `${values.meta.error && values.meta.touched ? 'text text-danger': 'text text-secondary'}` 
        const classInput = `${values.meta.error && values.meta.touched ? 'border border-danger':'border border-secondary'}`
       return(
            <div className="field">
               <label className={classLabel}>{values.label}</label>
               <input className={classInput} {...values.input}/>
               {this.renderError(values.meta)}
            </div>
        )
    }
    render(){
        const email = this.props.language === 'english'?'Email Address':'Correo Electronico'
        const mobile = this.props.language === 'english'?'Mobile Number':'Numero de Contacto'
        const next = this.props.language === 'english'?'Next':'Siguiente'
        const previos = this.props.language === 'english'?'Previos':'Anterior'
        return(
            <div className="form1">
               <form className="ui form" onSubmit={this.props.handleSubmit}>
               <h4>{this.props.title}</h4>
                  <Field name="email" component={this.RenderField} label={email}/>
                  <Field name="phone" component={this.RenderField} label={mobile}/>
                 
                  <button className="btn btn-primary ml-1 mr-1" type="submit" onClick={()=>{this.props.previusPage()}}>{previos}</button>
                  <button className="btn btn-primary ml-2 " type="submit">{next}</button>
               </form>
            </div>
        )
    }
}
const validate = props => {
    const error = {}
    
    if(!props.email){
        error.email="email is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email))
    {
        error.email = "enter a valid email address"
    }
    if(!props.phone){
        error.phone="phone is required"
    }
    else if(!/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/i.test(props.phone)){
        error.phone = "enter a valid phone number"
    }
    return error
}
export default reduxForm({
   form:'formdemo',
   destroyOnUnmount: false,
   validate
})(Form2)

