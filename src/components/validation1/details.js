import React from 'react'
import '../../styles/details.css'

class Details extends React.Component{
    render(){

        const backtolist = this.props.language === 'english'? 'Back to list':'Volver a lista'
        const detalles = this.props.language === 'english'? 'Details':'Detalles'
        const edit = this.props.language === 'english'? 'Edit':'Editar'
        const deletes = this.props.language === 'english'? 'Delete':'Eliminar'


    if(!this.props.selected){
        return <div>loading</div>
    }
    return(
    <div className="details">
           <p style={{textAlign:'right',paddingRight:'20px',paddingTop:'10px'}} onClick={()=>this.props.onOption('')}>
                     {backtolist}
                </p>
        <h4 className="text  pl-3">{detalles}</h4>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {this.props.selected.firstname +' '+this.props.selected.lastname}
                </h4>
                <h4  className="card-title">{this.props.selected.email}</h4>
                <h4  className="card-title">{this.props.selected.phone}</h4>
                <p className="card-title">{this.props.selected.description}</p>
        </div>
         <div className="buttons mb-4">
             <button className="ui button ml-5"
              onClick={()=>this.props.onSelected(this.props.selected,'update')}>{edit}</button>
             <button className="btn btn-danger ml-2"
              onClick={()=>this.props.onSelected(this.props.selected,'delete')}
             >{deletes}</button>
         </div>
        </div>
    </div>
    )
    }
}
export default Details



