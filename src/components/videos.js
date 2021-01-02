import React from 'react'
import VideoDisplay from './videoDisplay'
import VideoList from './videoList'
import '../styles/videos.css'

const Videos = props => {
    return(
        <div className='videosDisplay'>
            <VideoDisplay selectedVideo={props.selectedVideo}/>
            <VideoList listVideos={props.onListVideos} selectingVideo={props.selectingVideo}/>
        </div>
    )
}
export default Videos



