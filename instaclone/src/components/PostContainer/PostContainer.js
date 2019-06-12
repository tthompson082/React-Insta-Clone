import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import styled from 'styled-components';

library.add(faHeart, faComment);

const Cards = styled.div`
    box-sizing: border-box;
    width: 40%;
    border: 1px solid #ECECEC;
    margin-bottom: 10px;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 10px;
`;

const CardTitleImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 50%;
`;

const CardTitleName = styled.span`
    font-weight: bolder;
`;

const CardImage = styled.img`
    width: 100%
`;

const CardIcons = styled.div`
    display: flex;
    margin: 3px 10px;
    width: 80px;
    justify-content: space-between;
`;

const Likes = styled.p`
    padding-left: 10px;
`;

const Comments = styled.div`
    padding-bottom: 5px;
    margin: 0 10px;
    border-bottom: 1px solid #ECECEC;
`;

const CommentInput = styled.input`
    width: 95%;
    height: 50px;
    border: none;
    padding: 10px 10px;
    outline: none;
    font-size: 16px;
`




class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: [],
            likes: [],
            comment: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            comments: this.props.postProp.comments,
            likes: this.props.postProp.likes
        })
    }

    addComment = event => {
        event.preventDefault();
    
        const newComment = {
            id: Date.now(),
            username: 'tthompson082',
            text: this.state.comment
        };

        this.setState(prevState => {
            return {
                comments: [...prevState.comments, newComment],
                comment: ''
            }
        })
    }

    addLike = event => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <Cards>
                <CardTitle>
                    <CardTitleImage src={this.props.postProp.thumbnailUrl}/>
                    <CardTitleName>{this.props.postProp.username}</CardTitleName>
                </CardTitle>
                
                <CardImage src={this.props.postProp.imageUrl}/>

                <CardIcons>
                    <FontAwesomeIcon icon="heart" size="2x" onClick={this.addLike} />
                    <FontAwesomeIcon icon="comment" size="2x" />
                </CardIcons>

                <Likes>{this.state.likes} likes</Likes>

                <Comments>
                    {this.state.comments.map(comment =>(
                        <CommentSection
                            commentProp={comment}
                            key={comment.id}
                        />
                    ))}
                </Comments>

                <form onSubmit={this.addComment}>
                    <CommentInput 
                    type="text" 
                    name="comment" 
                    placeholder="Add a comment..."
                    onChange={this.handleChanges}
                    value={this.state.comment}
                    />
                </form>
            </Cards>
        )
    }
}

PostContainer.propTypes = {
    postProp: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })

}

export default PostContainer;