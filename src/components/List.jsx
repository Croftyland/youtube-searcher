import React from 'react';
import Item from './Item';

const List = ({videos , onVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return<Item key={video.id.videoId}
                    video={video}
                    onVideoSelect={onVideoSelect} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default List;

