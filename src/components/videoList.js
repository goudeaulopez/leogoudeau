import React from 'react'
import VideoItem from './videoItem'

const VideoList = props => {
  const videolist = props.listVideos.map( item => {
      return  <VideoItem key={item.etag} item = {item}/>
  })
    return<div> {videolist}</div>
}
export default VideoList