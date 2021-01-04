import React from 'react'
import _ from 'lodash'
import Create from './create'
import Details from './details'
import Delete from './delete'
import Update from './update'
import List from './list'
import '../../styles/validations1.css'

const array=[]
class Validations1 extends React.Component{
    state = {option:'', list:[], selected:null}
    
    onOption = option => {
        this.setState({option})
    }
    onList = (form,option) => {
    
            array.push(form)
            this.setState({option, list:array})
    }
    onUpdate= (form,option) => {
    var y = _.findIndex(array,x=> x.email === this.state.selected.email)
         array[y]=form;
        this.setState({option, list:array })
    
}
 onSelected = (selected,option) => {
        this.setState({selected,option})
    }
onDelete = (selected,option)=>{
    var y = _.findIndex(array,x=> x.email === selected.email)
   array.splice(y,1)
    this.setState({list:array,option})
}
    renderOption = () =>{
    
        if(this.state.option === 'create'){
            return <Create onList={this.onList} onCheck={this.state.list} onOption={this.onOption}/>
        }else if(this.state.option === 'update'){
            return <Update selected={this.state.selected} onList={this.onUpdate} onOption={this.onOption}/>
        }else if(this.state.option === 'details'){
            return <Details onOption={this.onOption} selected={this.state.selected} onSelected={this.onSelected} onDelete={this.onDelete}/>
        }else if(this.state.option === 'delete'){
            return <Delete onDelete={this.onDelete} selected={this.state.selected} onSelected={this.onSelected}/>
        }
        else{
            return <List onOption={this.onOption} displayList={this.state.list} onSelected={this.onSelected}/>
        }
    }
     render(){
        return(
            <div className="validations1"> 
                {this.renderOption()}
            </div>
        )
    }
}
export default Validations1