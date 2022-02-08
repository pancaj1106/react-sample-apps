import React from 'react';
import './videoItemDetail.css';

class VideoItemDetail extends React.Component {

    render() {
        const item = this.props.video;
        return (
            <div onClick={() => this.props.onVideoSelect(item)} className='video-item item'>
                <img className='ui image' src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                <div className='content'>
                    <div className='header'>{item.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItemDetail;