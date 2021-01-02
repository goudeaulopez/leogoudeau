import React from 'react'
import VideoItem from './videoItem'
import '../styles/videoList.css'

const VideoList = props => {
  const videolist = props.listVideos.map( item => {
      return  <VideoItem key={item.etag} item = {item} selectingVideo={props.selectingVideo}/>
  })
    return<div className="videolist"> {videolist}</div>
}
export default VideoList