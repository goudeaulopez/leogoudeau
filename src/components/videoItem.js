import React from 'react'

const VideoItem = props => {
    return(
        <div className="ui raised segment m-3">
            <img className="ui tiny left floated image" src={props.item.snippet.thumbnails.medium.url}/>
            <p>{props.item.snippet.title}</p>
        </div>
    )
}
export default VideoItem
