import React from 'react'
import ListItem from './listItem'

class List extends React.Component{
    renderList = () => {

        const firstAddRecord = this.props.language === 'english'? ' Please be the first in to add a record':
         'Sea el primero en agregar un registro'

        if(this.props.displayList.length === 0){
            return (<div style={{textAlign:'center',fontSize:'14px',paddingTop:'30px',color:'#2a2e33'}}>
                {firstAddRecord}
               </div>)
        } 
       return  this.props.displayList.map(
            item => {
                return <ListItem language={this.props.language} key={item.email} item={item} onSelected={this.props.onSelected}/>
            }
        )
    }
    render(){
        const AddRecord = this.props.language === 'english'? ' Add New Record':
        'Agrega nuevo registro'
         return(
             <div>
                 <p style={{textAlign:'right',paddingRight:'20px',paddingTop:'10px'}} onClick={()=>this.props.onOption('create')}>
                     {AddRecord}
                </p>
                
                  {this.renderList()}
             </div>
         )
    }
}
export default List
