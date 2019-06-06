import React from 'react';
import './CommentSection.scss'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Username = styled.span`
    font-weight: bolder;
`

const CommentSection = props => {
    return (
        <div className="comments">
            <p><Username>{props.commentProp.username}</Username> {props.commentProp.text}</p>
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