import React from 'react';
import './App.scss';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <div className="cards">
          {this.state.data.map(post =>(
            <PostContainer
              postProp={post}
              key={Date.now()}
            />
          ))}
        </div>
      </div>
    );
    }
}

export default App;
