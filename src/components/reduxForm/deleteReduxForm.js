import React from 'react'
import ModalReduxform from './modalReduxform'

class DeleteReduxform extends React.Component{
   renderContext(){
       const message = this.props.language === 'english'?'Are you sure you want to delete this record':
       'Estas Seguro que quieres eliminar este record'
       const messageWithname = this.props.language === 'english'?'Are you sure you want to delete this record':
       'Estas Seguro que quieres eliminar este record'
       if(!this.props.delete){
        return message
      }
      return `${messageWithname} ${this.props.delete.firstname}`
   }
   renderActions=()=>{
    const Cancel = this.props.language === 'english'?'Cancel':'Cancelar'
    const Delete = this.props.language === 'english'?'Delete':'Eliminar'
    return (
      <React.Fragment>
          <button className="ui button negative" onClick={()=>{this.props.onDelete(this.props.delete)}} >{Delete}</button>
          <button className="ui button" onClick={()=>this.props.onOption('details') } >{Cancel}</button>
      </React.Fragment>
  )
  }
   render(){
        return (
                <div>
                    <ModalReduxform
                        language = {this.props.language}
                        onDismiss={()=>{this.props.onOption('details')}}
                        title="Delete Record"
                        context={this.renderContext()}
                        actions={this.renderActions()}
                    
                    />
                </div>
        )
    }
}
export default DeleteReduxform