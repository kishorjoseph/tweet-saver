import React from "react";
import { TweetItem } from "./TweetItem";
export const TweetList = (props) => {
  return (
    <div
      className="tweet-lists"
      onDragLeave={(e) => props.onDragLeave(e)}
      onDragEnter={(e) => props.onDragEnter(e)}
      onDragEnd={(e) => props.onDragEnd(e)}
      onDragOver={(e) => props.onDragOver(e)}
      onDrop={(e) => props.onDrop(e)}>
      {props.tweets.map((tweet, index) => (
        <TweetItem
          key={index}
          tweet={tweet}
          onDragStart={props.onDragStart}
          onDragEnd={props.onDragEnd}
        />
      ))}
    </div>
  );
};
