import React from 'react'
import AddRecord from './addRecord'
import BackToList from './backtolist'
import ReduxFormList from './reduxformList'
import CreateReduxForm from './createReduxForm'
import DisplayReduxForm from './displayReduxForm'
import '../../styles/reduxForm.css'
import UpdateReduxForm from './updateReduxForm'
import _ from 'lodash'
import DeleteReduxform from './deleteReduxForm'

const arrayList=[];
class ReduxForm extends React.Component{
    state = {option:'',list:[],selected:null}
    onOption=option=>{
        this.setState({option})
    }
    onCreate = objeto => {
        arrayList.push(objeto)
        this.setState({list:arrayList,option:''})
        console.log(objeto)
    }
    onUpdate = (update)=> {
        var index = _.findIndex(arrayList,x=> x.id === update.id) //this.state.selected.id
        Array[index] = update
        this.setState({list:arrayList,selected:update ,option:'details'})
     }
    onSelected = selected => {
        this.setState({selected, option:'details'})
    }
    onDelete = deletes=> {
        var index = _.findIndex(arrayList,x=> x.id === deletes.id)
        arrayList.splice(index,1)
        this.setState({list:arrayList,option:''})
    }
    renderHelper(){
        switch(this.state.option){
            case 'create':
                return <CreateReduxForm language={this.props.language}  onCreate={this.onCreate} option={this.state.option} />
            case 'details':
                return <DisplayReduxForm language={this.props.language} selected={this.state.selected} onOption={this.onOption}/>
            case 'update':
                return <UpdateReduxForm language={this.props.language} update={this.state.selected} onUpdate={this.onUpdate} option={this.state.option}/>
            case 'delete':
                return <DeleteReduxform language={this.props.language} delete={this.state.selected} onDelete={this.onDelete} onOption={this.onOption}/>
            default:
                return <ReduxFormList language={this.props.language} displayList={this.state.list} onSelected={this.onSelected}/>
            
        }
    }
    render(){
        const option = this.state.option === '' ? 
        <AddRecord onOption={this.onOption} language={this.props.language}/> :
         <BackToList language={this.props.language} onOption={this.onOption}/>
        //const content = this.state.option === '' ? <ReduxFormList/>:<Form/>
        return(
            <div>
                <div className="linkStyles">
                  {option}
                </div>
                <div>
                {this.renderHelper()}
                </div>
            </div>
        )
    }
}
export default ReduxForm