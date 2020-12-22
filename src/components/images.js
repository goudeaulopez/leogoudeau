//import React from 'react'
import React from 'react'
import ImageItem from './imageItem'
import '../styles/imageList.css'

const ImageList = props => {
const renderList = props.onListImage.map( image => {
         return <ImageItem image={image} key={image.id} onSelected={props.onSelected}/>
     });
    return <div className="image-list">{renderList}</div>
    
}
export default ImageList;





/*
class Images extends React.Component {
 state={selection:false,selected:null}
 onSelected = selected =>{
     console.log(this.state.selected)
     this.setState({selected,selection:true})
 }
 render(){
   const displaylist = this.props.imageList.map(
       item => {
           return <div key={item.alt_description}><ImageItem  onSelected={this.onSelected} item={item} /></div>
       }
   )
   const selection = this.state.selection === false ? displaylist : <Display selected={this.state.selected}/>

  return <div>{selection}</div>
 }
}
export default Images





*/


/*
const ImageItem = props => {
    return <div onClick={()=> props.onSelected(props.item)}>{props.item.description}</div>
}

const Display = props => {
    if(props.selected===null){
        return <div>loading</div>
    }
    return<div style={{marginTop:'10%'}}>{props.selected.description}</div>
}
*/