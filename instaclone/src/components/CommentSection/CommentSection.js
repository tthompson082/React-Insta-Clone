import React from 'react';
import './CommentSection.scss'

const CommentSection = props => {
    return (
        <div className="comments">
            <p><span className="comment-username">{props.commentProp.username}</span> {props.commentProp.text}</p>
        </div>
    )
}

export default CommentSection;