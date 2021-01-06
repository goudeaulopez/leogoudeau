import React from 'react'

const BackToList = props => {
    const backtolist = props.language === 'english'?'Back to list':'Volver a lista'
    return <a onClick={()=>props.onOption('')}>{backtolist}</a>
}
export default BackToList