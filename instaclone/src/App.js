import React from 'react';
import './App.scss';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    this.setState({
      data: dummyData
    })
  }

  addComment = event => {
    event.preventDefault();


  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <div className="card-container">
          {this.state.data.map(post =>(
            <PostContainer
              postProp={post}
              commentsProp={post.comments}
              key={post.id}
            />
          ))}
        </div>
      </div>
    );
    }
}

export default App;
