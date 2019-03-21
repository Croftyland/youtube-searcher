import React from 'react';

import '../style/History.less';


const History = React.createClass({

    render() {
        return (
            <div className='History'>
                <p>Create</p>
                <span className='History__del-icon' onClick={this.props.onDelete}> × </span>
                <h4 className='History__title' >{this.props.snippet}</h4>
            </div>
        );
    }
});

export default History;
