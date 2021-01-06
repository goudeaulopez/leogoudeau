import React from 'react'
import '../../styles/reduxFormListItem.css'
const ReduxFormListItem = props => {
    const details = props.language === 'english'?'Details':'Detalles'
    return(
       <div className="reduxFormListItem">
           <div className="ui segment" id="uiSegment">
                    <div className="pl-2 pr-5"> {props.item.firstname+' '+props.item.lastname}</div>
                    <div className="pl-4 pr-5" id="email">{props.item.email}</div>
                    <button  className="mini ui button primary ml-5" onClick={()=>props.onSelected(props.item)}>{details}</button>
           </div>
       </div>
    )
}
export default ReduxFormListItem

/*
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


*/
