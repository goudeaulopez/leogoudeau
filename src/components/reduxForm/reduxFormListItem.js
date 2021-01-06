import React from 'react'
import '../../styles/reduxFormListItem.css'
const ReduxFormListItem = props => {
    return(
       <div>
           
                <div className="ui grid container" id="listitem" onClick={()=>props.onSelected(props.item)}>
                    <div className="eight wide column"> {props.item.firstname+' '+props.item.lastname}</div>
                    <div className="eight wide column">{props.item.appointment}</div>
                </div>
           
           
                <div className="ui grid container" id="listitembs" onClick={()=>props.onSelected(props.item)}>
                    <div className="four wide column"> {props.item.firstname+' '+props.item.lastname}</div>
                    <div className="four wide column">{props.item.email}</div>
                    <div className="four wide column">{props.item.phone}</div>
                    <div className="four wide column">{props.item.appointment}</div>
                </div>
           
       </div>
    )
}
export default ReduxFormListItem
