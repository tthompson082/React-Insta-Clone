import React from 'react';
import './App.scss';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchResults: []
    }
  }

  componentDidMount = () => {
    this.setState({
      data: dummyData,
      searchResults: dummyData
    })
  }

  searchFilter = event => {

    const posts = this.state.data.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    })
    this.setState({
      searchResults: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchFunction={this.searchFilter} />

        <div className="card-container">
          {this.state.searchResults.map(post =>(
            <PostContainer
              postProp={post}
              key={post.id}
            />
          ))}
        </div>
      </div>
    );
    }
}

export default App;
