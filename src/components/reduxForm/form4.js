import React from 'react'
import {Field,reduxForm, reset} from 'redux-form'
import '../../styles/form1.css'

class Form4 extends React.Component{

renderError = values => {
    if(values.error && values.touched){
        return(
            <div>
                <div className='text text-danger'>{values.error}</div>
            </div>
        )
    }
}

RenderDescription = values => {
    const classLabel = `${values.meta.error && values.meta.touched ? 'text text-danger': 'text text-grey'}` 
    const classInput = `${values.meta.error && values.meta.touched ? 'border border-danger':''}`
    const What_is_your_story= this.props.language === 'english'?'What is your story':'Cual es tu historia'
    return(
        <div className="field">
             <h4 className={classLabel}>{What_is_your_story}</h4>
             <textarea className={classInput} {...values.input} placeholder={values.placeholder} />
             {this.renderError(values.meta)}
        </div>
    )
}
render(){
        const enviar = this.props.language === 'english'?'Submit':'Enviar'
        const previos = this.props.language === 'english'?'Previos':'Anterior'
        const name = this.props.language === 'english'?'Description':'Descripcion'
        const placeholder = this.props.language === 'english'?' Please say Something':'Porfavor diga algo'
        
        return(
            <div className="form1">
               <form className="ui form" onSubmit={this.props.handleSubmit}>
               
               <Field
                        name={name}
                        placeholder={placeholder}
                        component={this.RenderDescription}
                       
                    />
                   <button className="btn btn-primary ml-2 mt-4" type="submit" onClick={()=>{this.props.previusPage()}}>{previos}</button>
                    <button className="btn btn-primary ml-1 mt-4" type="submit" onClick={reset}>{enviar}</button>
               </form>
            </div>
        )
    }
}
const validate = props => {
    const error = {}
    
    if(!props.description){
        error.description="Description is required"
    }
    else if(props.description.length < 70 && props.description.length > 100 ){
        error.description="description required 50 characters min"
    }
    return error
}
export default reduxForm({
   form:'formdemo',
   destroyOnUnmount: false,
   validate
})(Form4)

