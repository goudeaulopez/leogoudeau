import React from 'react'

const AddRecord = props =>{
    return <a onClick={()=>props.onOption('create')}>Add Record</a>
}
export default AddRecord