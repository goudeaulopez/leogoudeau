import React from 'react'
import '../styles/imageDisplay.css'

const ImageDisplay = props => {
   const displayButton = props.language === 'english'? 'back to list' : 'volver a imagenes'
    return(
        <div  className="imageDisplay">
            <img alt={props.selected.alt_description} src={props.selected.urls.raw} />
            <button onClick={()=>props.selectMenuBar('Images')} className="ui primary mini centered button mt-2 ml-5">{displayButton}</button>
            <br/><br/>
        </div>
    )
}
export default ImageDisplay
//className="displayImage"