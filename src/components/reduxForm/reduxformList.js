import React from 'react'
import ReduxFormListItem from './reduxFormListItem'

class ReduxFormList  extends React.Component{
    renderList = () =>{
      if(this.props.displayList.length === 0){
          return <div style={{textAlign:'center',paddingTop:'10%'}}>no data</div>
      }
      return this.props.displayList.map(
          item =>{
              return <ReduxFormListItem key={item.id} item={item} onSelected={this.props.onSelected}/>
          }
      )
    }
    
     render(){
     return<div>{this.renderList()}</div>
    }
}
export default ReduxFormList 