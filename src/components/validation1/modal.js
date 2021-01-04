import ReactDOM from 'react-dom'
import React from 'react'
import '../../styles/modal.css'

const Modal = props =>{
    return ReactDOM.createPortal(
        <div>
           <div className="answer">
                <h4 className="text pt-3  pl-4">Delete</h4>
                <h5 className="text  text-center pb-3">Are you sure you want to delete</h5>
                <div className="link">
                     <button onClick={()=>props.onDelete(props.selected,'')} className="btn btn-danger ml-5">delete</button>
                     <button onClick={()=>props.onSelected(props.selected,'details')} className="ui button ml-1">cancel</button>
                </div>
           </div>
       </div>,
        document.querySelector('#modal')
    )
}
export default Modal