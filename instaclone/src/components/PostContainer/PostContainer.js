import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faComment);

const PostContainer = props => {
    return (
        <div>
            <div className="card-title">
                <img src={props.postProp.thumbnailUrl}/>
                <span>{props.postProp.username}</span>
            </div>
            <img src={props.postProp.imageUrl}/>
            <div className="card-icons">
                <FontAwesomeIcon icon="heart" size="2x" />
                <FontAwesomeIcon icon="comment" size="2x" />
            </div>
            <p>{props.postProp.likes} likes</p>
        </div>
    )
}

export default PostContainer;