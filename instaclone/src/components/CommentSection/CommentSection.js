import React from 'react';
import './CommentSection.scss'
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comments">
            <p><span className="comment-username">{props.commentProp.username}</span> {props.commentProp.text}</p>
        </div>
    )
}

CommentSection.propTypes = {
    commentProp: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;