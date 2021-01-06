import React from 'react'
import ReduxFormListItem from './reduxFormListItem'

class ReduxFormList  extends React.Component{


    renderList = () =>{

      const nodata = this.props.language === 'english'? 'Add some data' : 'Agrega informacion'

      if(this.props.displayList.length === 0){
          return <div style={{textAlign:'center',paddingTop:'10%'}}>{nodata}</div>
      }
      return this.props.displayList.map(
          item =>{
              return <ReduxFormListItem language={this.props.language} key={item.id} item={item} onSelected={this.props.onSelected}/>
          }
      )
    }
    
     render(){
     return<div>{this.renderList()}</div>
    }
}
export default ReduxFormList 