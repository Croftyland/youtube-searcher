import React from 'react';
import Search from './components/Search';
import youtube from './api/youtube';
import List from './components/List';
import Details from './components/Details';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
        <div className='ui container' style={{marginTop: '1em'}}>
          <Search handleFormSubmit={this.handleSubmit}/>
          <div className='ui grid'>
            <div className="ui row">
              <div className="eleven wide column">
                <Details video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <List onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;