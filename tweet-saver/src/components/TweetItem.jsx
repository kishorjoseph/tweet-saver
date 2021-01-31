import React from "react";
import { toISODate } from "../util";
export const TweetItem = (props) => (
  <div
    id={props.tweet.tweetId}
    className="tweet-details"
    draggable
    onDragStart={(e) => props.onDragStart(e)}
    onDragEnd={(e) => props.onDragEnd(e)}>
    <img src={props.tweet.user.profile_image_url} alt="text" />
    <div className="tweet-row">
      <div className="tweets">{props.tweet.user.name}</div>
      <div className="tweets">{props.tweet.user.screen_name}</div>
      <div className="tweets">{toISODate(props.tweet.created_at)}</div>
    </div>
    <div className="tweet-text">{props.tweet.text}</div>
  </div>
);
