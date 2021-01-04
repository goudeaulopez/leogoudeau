import React from 'react'
import '../../styles/videoDisplay.css'

const VideoDisplay = props => {
    if(!props.selectedVideo){
        return <div style={{marginTop:'100px'}} className="ui text loader">Loading</div>
          
    }
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
    return(
        <div className="displayItem" >
            <div>
                 <iframe id="iframe"title="video" src={videoSrc}/>
            </div>
            <div>
              <h5 style={{textAlign:'center',paddingLeft:'10px'}}>{props.selectedVideo.snippet.title}</h5>
              <p style={{paddingLeft:'20px'}}>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDisplay