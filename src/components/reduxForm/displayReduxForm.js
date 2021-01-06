import React from 'react'
import '../../styles/displayReduxForm.css'

const details = "ui secondary center aligned segment"

class DisplayReduxForm extends React.Component{
     renderButtons = () => {
      return(
         <React.Fragment>
             <button className="btn btn-primary mr-1" onClick={()=>this.props.onOption('update')}>Update</button>
             <button className="btn btn-danger ml-1" onClick={()=>this.props.onOption('delete')}>Delete</button>
         </React.Fragment>
      )
    }
    render(){
    return(
        <div className="display">
           
           <div className="ui piled segments">
              <div className="ui secondary center aligned segment" style={{fontSize:'16px',paddingLeft:'5%'}}>Details</div>
              <div className={details}> {'Email:'+this.props.selected.email}</div>
              <div className={details}>{'Fullname:'+this.props.selected.firstname+' '+this.props.selected.lastname}</div>
              <div className={details}>{'Mobile: '+this.props.selected.phone}</div>
              <div className={details}>{'Calling time:'+this.props.selected.appointment}</div>
              <div className={details}>Description:</div>
             <div className="ui secondary center aligned segment">{this.props.selected.description}</div>
              <div  className={details}>{this.renderButtons()}</div>
          </div>
       </div>
    )
    }
}
export default DisplayReduxForm