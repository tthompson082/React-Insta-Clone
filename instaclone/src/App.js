import React from 'react';
import './App.scss';

import PostsPage from './PostsPage';
import withAuthenticate from './authentication';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
    }
}

export default App;
