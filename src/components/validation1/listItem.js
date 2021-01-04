import React from 'react'
import '../../styles/listItem.css'

const ListItem = props =>{
    const buttons = props.language === 'english'? ' details':
    'detalles'
    return(
          <div>
             <div className="listItem ui segment" onClick={()=>props.onSelected(props.item,'details')}>
                 <p>{props.item.firstname+' '+props.item.lastname}</p>
                 <p>{props.item.phone}</p>
                 <p id="email">{props.item.email}</p>
                 <p id="button" className="mini ui btn btn-primary">{buttons}</p>
              </div>
          </div>
       
    )
}
export default ListItem
//ui segm