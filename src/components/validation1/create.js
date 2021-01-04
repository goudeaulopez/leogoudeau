import React from 'react'
import SimpleForm from './simpleform'
import '../../styles/create.css'


class Create extends React.Component{
     render(){
        return(
            <div className="create">
                 <p  onClick={()=>this.props.onOption('')}>
                     Back to list
                </p>
                <SimpleForm onList={this.props.onList} create="Create" title="Create Record" />
            </div>
        )
    }
}
export default Create