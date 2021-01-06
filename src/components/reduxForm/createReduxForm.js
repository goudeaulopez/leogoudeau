import React from 'react'
import Form from './form'

const CreateReduxForm = props => {
    return(
        <div>
           <Form onCreate={props.onCreate} option={props.option} language={props.language}/>
        </div>
    )
}
export default CreateReduxForm