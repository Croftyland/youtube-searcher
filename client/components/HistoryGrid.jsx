import React from 'react';
import History from './History.jsx';

import Masonry from 'react-masonry-component';

import '../style/HistoryGrid.less';

const HistoryGrid = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Hisrory',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='HistoryGrid'
                options={masonryOptions}
            >
                {
                    this.props.videos.map(video =>
                        <History
                            key={video.id}
                            title={video.etag}
                            snippet={video.thumbnail}
                            onDelete={this.props.onVideoDelete.bind(null, video.id)}
                            color={video.color}
                        >
                        </History>
                    )
                }
            </Masonry>
        );
    }
});

export default HistoryGrid;
