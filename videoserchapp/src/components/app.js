import React from 'react';
import SearchText from './searchText';
import VideoList from './videoList';
import SelectedVideo from './selectedVideo';
import youtubeAPI from '../apis/youtube';
import './app.css';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onSearchTextChanged = async (criteria) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                q: criteria
            }
        })

        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
    }

    onSelectionChanged = (video) => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.onSearchTextChanged('reactjs');
    }

    render() {
        return (
            <div className='ui container'>
                <SearchText onTextChanged={this.onSearchTextChanged} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <SelectedVideo video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column video-scroll'>
                            <VideoList onSelectionChanged={this.onSelectionChanged} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;