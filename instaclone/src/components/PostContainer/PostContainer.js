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
            comments: []
        }
    }

    componentDidMount = () => {
        this.setState({
            comments: this.props.postProp.comments
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
                    <FontAwesomeIcon icon="heart" size="2x" />
                    <FontAwesomeIcon icon="comment" size="2x" />
                </div>

                <p className="likes">{this.props.postProp.likes} likes</p>

                <div className="comment-section">
                    {this.state.comments.map(comment =>(
                        <CommentSection
                            commentProp={comment}
                            key={comment.id}
                        />
                    ))}
                </div>

                <input type="text" name="comment" placeholder="Add a comment..."/>
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