import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.scss'
import dummyData from '../../dummy-data';

library.add(faHeart, faComment);

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
            <div className="cards">
                <div className="card-title">
                    <img src={this.props.postProp.thumbnailUrl}/>
                    <span>{this.props.postProp.username}</span>
                </div>
                
                <img src={this.props.postProp.imageUrl}/>

                <div className="card-icons">
                    <FontAwesomeIcon icon="heart" size="2x" onClick={this.addLike} />
                    <FontAwesomeIcon icon="comment" size="2x" />
                </div>

                <p className="likes">{this.state.likes} likes</p>

                <div className="comment-section">
                    {this.state.comments.map(comment =>(
                        <CommentSection
                            commentProp={comment}
                            key={comment.id}
                        />
                    ))}
                </div>

                <form onSubmit={this.addComment}>
                    <input 
                    type="text" 
                    name="comment" 
                    placeholder="Add a comment..."
                    onChange={this.handleChanges}
                    value={this.state.comment}
                    />
                </form>
            </div>
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