import React from 'react'
import '../../styles/displayReduxForm.css'

const details = "ui secondary center aligned segment"

class DisplayReduxForm extends React.Component{
     renderButtons = () => {
      const update = this.props.language === 'english'?'Update':'Editar'
      const Delete = this.props.language === 'english'?'Delete':'Eliminar'
      return(
         <React.Fragment>
             <button className="btn btn-primary mr-1" onClick={()=>this.props.onOption('update')}>{update}</button>
             <button className="btn btn-danger ml-1" onClick={()=>this.props.onOption('delete')}>{Delete}</button>
         </React.Fragment>
      )
    }
    render(){
      const detailss = this.props.language === 'english'?'Details':'Detalles'
      const Description=this.props.language === 'english'?'Description:':'Descripcion:'
    return(
        <div className="display">
           
           <div className="ui piled segments">
              <div className="ui secondary center aligned segment" style={{fontSize:'16px',paddingLeft:'5%'}}>{detailss}</div>
              <div className={details}> {this.props.selected.email}</div>
              <div className={details}>{this.props.selected.firstname+' '+this.props.selected.lastname}</div>
              <div className={details}>{this.props.selected.phone}</div>
              <div className={details}>{this.props.selected.appointment}</div>
              <div className={details}>{Description}</div>
             <div className="ui secondary center aligned segment">{this.props.selected.Description}</div>
              <div  className={details}>{this.renderButtons()}</div>
          </div>
       </div>
    )
    }
}
export default DisplayReduxForm