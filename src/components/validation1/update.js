import React from 'react'
import SimpleForm from './simpleform'
import _ from 'lodash'
import '../../styles/create.css'

class Update extends React.Component{
    render(){
    return(
        <div className="create">
            <p  onClick={()=>this.props.onOption('')}>
                     Back to list
                </p>
           <SimpleForm initialValues={_.pick(this.props.selected,'firstname','lastname','phone','email','description')}
                       onList={this.props.onList} create="Update" title="Update Record"
           />
        </div>
    )
    }
}
export default Update