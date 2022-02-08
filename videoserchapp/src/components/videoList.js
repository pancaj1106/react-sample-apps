import React from 'react';
import VideoItemDetail from './videoItemDetail';

class VideoList extends React.Component {
    render() {
        const renderedList = this.props.videos.map((video) => {
            return (
                <VideoItemDetail
                    key={video.id.videoId}
                    video={video}
                    onVideoSelect={this.props.onSelectionChanged} />
            )
        });

        return (
            <div className='ui relaxed divided list'>
                {renderedList}
            </div>
        );
    }
}

export default VideoList;