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
        const classLabel = `${values.meta.error && values.meta.touched ? 'text text-danger': ''}` 
        const classInput = `${values.meta.error && values.meta.touched ? 'border border-danger':''}`
        return(
            <div className="field">
               <label className={classLabel}>{values.label}</label>
               <input className={classInput} {...values.input}/>
               {this.renderError(values.meta)}
            </div>
        )
    }
    render(){
        return(
            <div className="form1">
               <form className="ui form" onSubmit={this.props.handleSubmit}>
               <h3>{this.props.title}</h3>
                  <Field name="email" component={this.RenderField} label="Email Address"/>
                  <Field name="phone" component={this.RenderField} label="Mobile Number"/>
                 
                  <button className="btn btn-primary ml-1 mr-1" type="submit" onClick={()=>{this.props.previusPage()}}>previos</button>
                  <button className="btn btn-primary ml-2 " type="submit">next</button>
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

