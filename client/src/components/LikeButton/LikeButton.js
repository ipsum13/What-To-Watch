import React from "react";
import { style } from "./LikeButton.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './LikeButton.css'

const LikeButton = (props) => {
  return (
    <div>
      {props.liked ? (
        <button style={ style } onClick={props.onUnlikeClick} >Unlike</button>
      ) : (
        <button style={ style } onClick={props.onLikeClick}><FontAwesomeIcon icon={faHeart} style={{color: 'red'}} />{" "} Like</button>
      )}
    </div>
  );
};

export default LikeButton;
