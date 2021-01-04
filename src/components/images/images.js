//import React from 'react'
import React from 'react'
import ImageItem from './imageItem'
import '../../styles/imageList.css'

const ImageList = props => {
const renderList = props.onListImage.map( image => {
         return <ImageItem image={image} key={image.id} onSelected={props.onSelected}/>
     });
    return <div className="image-list">{renderList}</div>
    
}
export default ImageList;



