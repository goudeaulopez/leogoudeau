import React from 'react'

class ImageItem extends React.Component{
    state={span:0}
    imageRef = React.createRef();
    componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
     
     const height = this.imageRef.current.clientHeight;
     
     const spans = Math.ceil(height / 10);
 
     this.setState({ spans });
    }
    
    render(){
         return(
             <div style={{ gridRowEnd: `span ${this.state.spans}` }} onClick={()=> this.props.onSelected(this.props.image,'')}>
                 <img alt={this.props.image.alt_description} src={this.props.image.urls.raw} ref={this.imageRef}/>
             </div>
         )
    }
 }
 export default ImageItem
