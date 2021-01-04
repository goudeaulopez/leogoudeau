import React from 'react'
import Modal from './modal'


class Delete extends React.Component{
  render(){
        return <Modal onDelete={this.props.onDelete} selected={this.props.selected} onSelected={this.props.onSelected}/>
    }
}
export default Delete