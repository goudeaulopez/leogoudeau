import React from 'react'

const AddRecord = props =>{
    const addRecord = props.language === 'english'?'Add Record':'Agregar campo'
    return <a onClick={()=>props.onOption('create')}>{addRecord}</a>
}
export default AddRecord