import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss'

library.add(fab, faCompass, faHeart, faUser);

class SearchBar extends React.Component {

    logOut = event => {
        localStorage.removeItem('username')
    }

    render() {
        return (
            <div className="search-bar">
                <div className="title">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
                    <span className="line">|</span>
                    <h1>Instagram</h1>
                </div>

                <div className="search">
                    <input type="text" name="search" placeholder="🔎Search" onChange={this.props.searchFunction}/>
                </div>

                <div className="icons">
                    <FontAwesomeIcon icon="compass" size="2x" />
                    <FontAwesomeIcon icon="heart" size="2x" />
                    <FontAwesomeIcon icon="user" size="2x" onClick={this.logOut} />
                </div>
            </div>
        )
    }
}

export default SearchBar;