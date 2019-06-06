import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

library.add(fab, faCompass, faHeart, faUser);

const SearchBarDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 1px solid #E6E6E6;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 16%;
    justify-content: space-between;
`;

const Line = styled.span`
    font-size: 50px;
`;

const TitleName = styled.h1`
    font-family: 'Pacifico', cursive;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 25px;
    font-size: 16px;
    text-align: center;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    outline: none;
`;

const Icons = styled.div`
        display: flex;
        width: 15%;
        justify-content: space-around;
`

class SearchBar extends React.Component {

    logOut = event => {
        localStorage.removeItem('username')
        window.location.reload();
    }

    render() {
        return (
            <SearchBarDiv>
                <Title>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
                    <Line>|</Line>
                    <TitleName>Instagram</TitleName>
                </Title>

                <div>
                    <SearchInput type="text" name="search" placeholder="🔎Search" onChange={this.props.searchFunction}/>
                </div>

                <Icons>
                    <FontAwesomeIcon icon="compass" size="2x" />
                    <FontAwesomeIcon icon="heart" size="2x" />
                    <FontAwesomeIcon icon="user" size="2x" onClick={this.logOut} />
                </Icons>
            </SearchBarDiv>
        )
    }
}

export default SearchBar;