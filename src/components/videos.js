import React from 'react'
import VideoDisplay from './videoDisplay'
import VideoList from './videoList'
import '../styles/videos.css'

const Videos = props => {

    if(!props.onListVideos){
        return <div className="ui loading segment">
            <p></p>
            <p></p>
        </div>
    }
    
    return(
        <div className='videosDisplay'>
            <div id="videoDisplays"> <VideoDisplay selectedVideo={props.selectedVideo}/></div>
            <div id="videoList"><VideoList listVideos={props.onListVideos} selectingVideo={props.selectingVideo}/></div>
           
            
        </div>
    )
}
export default Videos



