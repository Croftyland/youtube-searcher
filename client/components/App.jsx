import React from 'react';

import VideosStore from '../stores/VideosStore';
import VideosActions from '../actions/VideosActions';

import VideoEditor from './VideoEditor.jsx';
import HistoryGrid from './HistoryGrid.jsx';

import '../style/App.less';

function getStateFromFlux() {
    return {
        videos: VideosStore.getVideos()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        VideosActions.loadVideos();
    },

    componentDidMount() {
        VideosStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        VideosStore.removeChangeListener(this._onChange);
    },

    handleVideoDelete(video) {
        VideosActions.deleteVideo(video.id);
    },

    handleVideoAdd(videoData) {
        VideosActions.createVideo(videoData);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>VideosApp</h2>
                <VideoEditor onVideoAdd={this.handleVideoAdd} />
                <HistoryGrid videos={this.state.history} onVideoDelete={this.handleVideoDelete} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
