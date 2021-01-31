import React, { useState, useEffect } from "react";
import { SearchTweets } from "../components/SearchTweets";
import { TweetList } from "../components/TweetList";
import { TweetBucket } from "../components/TweetBucket";
import { searchTweets } from "../services/searchTweets";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetName, setTweetName] = useState("");
  const tweetNameChangeHandler = (evt) => {
    setTweetName(evt.target.value);
  };
  useEffect(() => {
    if (!!localStorage.getItem("tweets")) {
      setTweets(JSON.parse(localStorage.getItem("tweets")));
    }
  }, []);
  const handleSearch = async () => {
    try {
      const tweetsResult = await searchTweets(tweetName);
      let tweetsData = [];
      if (tweetsResult) {
        tweetsData = tweetsResult.statuses.map((tweet, index) => ({
          tweetId: index,
          right: false,
          ...tweet,
        }));
      }
      setTweets(tweetsData);
      window.localStorage.setItem("tweets", JSON.stringify(tweetsData));
    } catch (error) {
      throw new Error(error.message);
    }
    setTweetName("");
  };
  const onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    evt.dataTransfer.dropEffect = "move";
  };
  const onDrop = (evt) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let tweetId = evt.dataTransfer.getData("text/plain");
    let tweetsList = tweets;
    let draggedTweets = tweetsList.map((tweet) => {
      if (tweet.tweetId == tweetId) tweet.right = !tweet.right;
      return tweet;
    });
    setTweets(draggedTweets);
    window.localStorage.setItem("tweets", JSON.stringify(draggedTweets));
  };

  let left = tweets.filter((t) => t.right === false);
  let right = tweets.filter((t) => t.right === true);

  return (
    <div className="tweet-container">
      <div className="tweet-result">
        <SearchTweets
          handleSearch={handleSearch}
          value={tweetName}
          tweetNameChangeHandler={tweetNameChangeHandler}
        />
        <TweetList
          tweets={left}
          onDragLeave={onDragLeave}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      </div>
      <div className="direction">
        <div className="drag-direction">
          <strong>Drag Tweets</strong>
        </div>
      </div>
      <div className="tweet-bucket">
        <TweetBucket
          tweets={right}
          onDragLeave={onDragLeave}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      </div>
    </div>
  );
};
