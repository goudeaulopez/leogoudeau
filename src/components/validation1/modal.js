import ReactDOM from 'react-dom'
import React from 'react'
import '../../styles/modal.css'

const Modal = props =>{
    const deletes = props.language === 'english' ? 'Delete': 'Remover'
    const mensaje = props.language === 'english' ? 'Are you sure you want to delete': 'Estas seguro que quieres eliminar record'
    const cancelar = props.language === 'english' ? 'Cancel':'Cancelar'

    return ReactDOM.createPortal(
        <div>
           <div className="answer">
                <h4 className="text pt-3  pl-4">{deletes}</h4>
                <h5 className="text  text-center pb-3">{mensaje}</h5>
                <div className="link">
                     <button onClick={()=>props.onDelete(props.selected,'')} className="btn btn-danger ml-5">{deletes}</button>
                     <button onClick={()=>props.onSelected(props.selected,'details')} className="ui button ml-1">{cancelar}</button>
                </div>
           </div>
       </div>,
        document.querySelector('#modal')
    )
}
export default Modal