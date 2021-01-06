import React from 'react'
import Form from './form'

const CreateReduxForm = props => {
    return(
        <div>
           <Form onCreate={props.onCreate} option={props.option}/>
        </div>
    )
}
export default CreateReduxForm