import React from 'react'
import Form from './form'
//import _ from 'lodash'

class UpdateReduxForm extends React.Component{
   render(){
     return(
        <div>
        <Form 
            onUpdate={this.props.onUpdate} 
            option={this.props.option} 
            update = {this.props.update}
        />
    </div>
     )
    }
}
export default UpdateReduxForm