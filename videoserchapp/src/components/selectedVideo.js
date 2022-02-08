import React from 'react';

class SelectedVideo extends React.Component {
    render() {
        const svideo = this.props.video;

        if (!svideo) {
            return <div>Loading...</div>
        }

        const videoSrc = `https:\\www.youtube.com/embed/${svideo.id.videoId}`;

        return (
            <div>
                <div className='ui embed'>
                    <iframe src={videoSrc} title={svideo.snippet.title}></iframe>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{svideo.snippet.title}</h4>
                    <p>{svideo.snippet.description}</p>
                </div>
            </div>

        )
    }
}

export default SelectedVideo;