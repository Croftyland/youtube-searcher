import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    title: {type: String},
    etag: {type: String},
    snippet: {type: String},
    thumbnail: {type: String},
    videoId: {type: String},
});

mongoose.model('Video', VideoSchema);
