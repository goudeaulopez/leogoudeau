import React from 'react'
import {Field,reduxForm} from 'redux-form'
import '../../styles/form1.css'

class Form1 extends React.Component{
    renderError= values =>{
        if(values.error && values.touched){
            return(
                <div>
                    <div className='text text-danger'>{values.error}</div>
                </div>
            )
        }
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
                 <Field name="firstname" component={this.RenderField} label="Firstname"/>
                 <Field name="lastname" component={this.RenderField} label="Lastname"/>
                 <button className="btn btn-primary" type="submit">next</button>
               </form>
            </div>
        )
    }
}
const validate = props => {
    const error = {}
    if(!props.firstname){
        error.firstname="firstname is require"
    }
    if(!props.lastname){
        error.lastname="lastname is required"
    }
   
    return error
}
export default reduxForm({
   form:'formdemo',
   destroyOnUnmount: false,
   validate
})(Form1)

