import React from 'react'
import {Field,reduxForm} from 'redux-form'
import '../../styles/form1.css'

class Form3 extends React.Component{
   
    renderError = values => {
        if(values.error && values.touched){
            return(
                <div>
                    <div className='text text-danger'>{values.error}</div>
                </div>
            )
        }
    }
    RenderRadiosFields = values =>{
        const classLabel = `${values.meta.error && values.meta.touched ? 'text text-danger': 'text text-secondary'}` 
     
         return(
           <div className="field">
                <div className="ui radio checkbox ml-2">
                    <input  {...values.input}  type="radio"/>
                    <label className={classLabel}>{values.label}</label>
                     <div style={{display:'none'}}>{this.renderError(values.meta)}</div>
                </div>
           </div>
        )
    }
    render(){
        const morningp = this.props.language === 'english'?'Morning':'Mañana'
        const afternoonp = this.props.language === 'english'?'Afternoon':'Tarde'
        const nochep = this.props.language === 'english'?'Evening':'Noche'
        const next = this.props.language === 'english'?'Next':'Siguiente'
        const previos = this.props.language === 'english'?'Previos':'Anterior'
        const timetomeet = this.props.language === 'english'?'Select your best time to meet:':'Selecciona el tiempo del dia para juntar'
        return(
            <div className="form1">
                <form className="ui from" onSubmit={this.props.handleSubmit}>
                    <div className="grouped fields">
                    <h4 >{timetomeet}</h4>
                    <Field name="appointment" component={this.RenderRadiosFields} label={morningp} value="morning"  type="radio"/>
                    <Field name="appointment" component={this.RenderRadiosFields} label={afternoonp} value="afternoon"  type="radio"/>
                    <Field name="appointment" component={this.RenderRadiosFields} label={nochep} value="evening"  type="radio"/>
                    
                     <button className="btn btn-primary ml-2 mt-4" type="submit" onClick={()=>{this.props.previusPage()}}>{previos}</button>
                     <button className="btn btn-primary ml-1 mr-1 mt-4" type="submit">{next}</button>
                     </div>
                </form>
            </div>
        )
    }
}
const validate = props => {
    const error = {}
   
    if(!props.appointment){
        error.appointment="required"
    }
    
    return error
}
export default reduxForm({
   form:'formdemo',
   destroyOnUnmount: false,
   validate
})(Form3)

