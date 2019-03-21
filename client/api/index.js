import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listVideos() {
        return axios.get(`${apiPrefix}/videos`);
    },

    createVideo(data) {
        return axios.post(`${apiPrefix}/videos`, data);
    },

    deleteVideo(videoId) {
        return axios.delete(`${apiPrefix}/videos/${videoId}`);
    }
}
