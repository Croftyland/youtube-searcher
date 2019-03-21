import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';
import {createVideo, deleteVideo, listVideos} from "../api/index.js";
import HistoryGrid from "./HistoryGrid.jsx";

import '../style/App.less'

const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

YTSearch({key: API_KEY, term: 'react'}, function (data) {
    console.log(data);
});

class VideoEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            history: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.updateHistory = this.updateHistory.bind(this);
        this.onDeleteHistory = this.onDeleteHistory.bind(this);
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]

            });
        });
        console.log(term);
    }

    onVideoSelect(selectedVideo) {
        this.setState({selectedVideo});
        createVideo(selectedVideo);
        this.updateHistory(this)
    }

    onDeleteHistory(selectedVideo) {
        deleteVideo(selectedVideo);
        this.updateHistory(this)
    }

    updateHistory(self) {
        listVideos()
            .then(function (videos) {
                self.setState({
                    history: videos.data
                })
            });

    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
                <HistoryGrid videos={this.state.history} onVideoDelete={this.onDeleteHistory} />
            </div>
        );
    }
};

export default VideoEditor

