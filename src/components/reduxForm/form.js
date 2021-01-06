import React from 'react'
import Form2 from './form2'
import Form1 from './form1'
import Form3 from './form3'
import Form4 from './form4'
import {reduxForm} from 'redux-form' 
import _ from 'lodash'

class Form extends React.Component{
    state={
        number: 1
    }
    nextPage= () =>{
        this.setState({number:this.state.number + 1 })
    }
    previusPage= ()=>{
        this.setState({number: this.state.number - 1 })
    }
    onSubmit = values =>{
        if(this.props.option==='create'){
            values.id= Date.now();
            this.props.onCreate(values)
           
    
        }else if(this.props.option==='update'){
            this.props.onUpdate(values)
            console.log(values)
        }
        
    }
    renderform(){
        var number = this.state.number
        switch(number){
            case 2: 
                return <Form2  title="Contact Info:" onSubmit={this.nextPage} previusPage={this.previusPage}/>
            case 3: 
                return <Form3  onSubmit={this.nextPage} previusPage={this.previusPage} />
            case 4:
                return <Form4  previusPage={this.previusPage} onSubmit={this.onSubmit}/>
            default:
                return <Form1 
                title="Personal Info:"
                initialValues={_.pick(this.props.update,'firstname','lastname','email','phone','appointment','description','id')} 
                        onSubmit={this.nextPage} />
        }
    }
    render(){
        return(
            <div>
                 {this.renderform()}
            </div>
        )
    }

   }
export default reduxForm({
    form:'formdemo'//,
   // initialValues: true
 })( Form)