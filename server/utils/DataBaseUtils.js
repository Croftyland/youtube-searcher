import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Video';

const Video = mongoose.model('Video');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listVideos(id) {
    return Video.find();
}

export function createVideo(data) {
    const video = new Video({
        title: data.title,
        etag: data.etag,
        snippet: data.snippet.title || '',
        thumbnail: data.snippet.thumbnails.default.url || '',
        videoId: data.videoId,
    });
    console.log(data);
    return video.save();

}


export function deleteVideo(id) {
    return Video.findById(id).remove();
}

