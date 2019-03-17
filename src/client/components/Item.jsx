import React from 'react';
import '../style/video.css';

const Item = ({video , onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <div onClick={ () => onVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={imageUrl} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};
export default Item;