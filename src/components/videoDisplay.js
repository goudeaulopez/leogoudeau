import React from 'react'

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
              <h4>{props.selectedVideo.snippet.title}</h4>
              <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDisplay