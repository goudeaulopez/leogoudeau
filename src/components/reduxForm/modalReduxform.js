import ReactDOM from 'react-dom'
import React from 'react'
import '../../styles/modalReduxform.css'

const ModalReduxform = props =>{
    return  ReactDOM.createPortal(
        <div onClick={props.onDismiss} >
            <div onClick={(e)=> e.stopPropagation()} className="ui tiny modal visible active" id="modal1">
                <div className="header">{props.title}</div>
                <div className="content">{props.context}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector("#modalreduxform")
    )
}
export default ModalReduxform