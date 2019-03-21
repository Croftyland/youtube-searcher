// import { EventEmitter } from 'events';
//
// import AppDispatcher from '../dispatcher/AppDispatcher';
// import AppConstants from '../constants/AppConstants';
//
// const CHANGE_EVENT = 'change';
//
// let _videos = [];
// let _loadingError = null;
// let _isLoading = true;
//
// function formatVideo(video) {
//     return {
//         id: video._id,
//         etag: video.etag,
//        // snippet: video.snippet.title,
//         thumbnails: video.snippet.thumbnail.default.url,
//         videoId: video.videoId,
//     };
// }
//
// const TasksStore = Object.assign({}, EventEmitter.prototype, {
//     isLoading() {
//         return _isLoading;
//     },
//
//     getVideos() {
//         return _videos;
//     },
//
//     emitChange: function() {
//         this.emit(CHANGE_EVENT);
//     },
//
//     addChangeListener: function(callback) {
//         this.on(CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function(callback) {
//         this.removeListener(CHANGE_EVENT, callback);
//     }
// });
//
// AppDispatcher.register(function(action) {
//     switch(action.type) {
//         case AppConstants.LOAD_VIDEOS_REQUEST: {
//             _isLoading = true;
//
//             TasksStore.emitChange();
//             break;
//         }
//
//         case AppConstants.LOAD_VIDEOS_SUCCESS: {
//             _isLoading = false;
//             _videos = action.videos.map( formatVideo );
//             _loadingError = null;
//
//             TasksStore.emitChange();
//             break;
//         }
//
//         case AppConstants.LOAD_VIDEOS_FAIL: {
//             _loadingError = action.error;
//
//             TasksStore.emitChange();
//             break;
//         }
//
//         default: {
//             console.log('No such handler');
//         }
//     }
// });
//
// export default TasksStore;
