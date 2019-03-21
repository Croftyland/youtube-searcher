import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const VideoActions = {
    loadVideos() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_VIDEOS_REQUEST
        });

        api.listVideos()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_VIDEOS_SUCCESS,
                videos: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_VIDEOS_FAIL,
                error: err
            })
        );
    },

    createVideo(video) {
        api.createVideo(video)
        .then(() =>
            this.loadVideos()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteVideo(videoId) {
        api.deleteVideo(videoId)
        .then(() =>
            this.loadVideos()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default VideoActions;
