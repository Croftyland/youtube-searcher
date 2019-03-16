import React, { Component } from 'react'; //Always need in JSX files

// Create the HTML to return for the input
class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar" style={{margin: "20px", textAlign: "center"}}>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    style = {{ width: "75%" }}
                />
            </div>
        );
    }
}

//We need to export to index.js to display
export default SearchBar;
//means any file that imports searchBar
//will only get the searchBar component
