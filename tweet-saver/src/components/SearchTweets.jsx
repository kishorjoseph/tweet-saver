import React from "react";
export const SearchTweets = (props) => {
  const { handleSearch, tweetNameChangeHandler, value } = props;
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Twitter"
        value={value}
        id="tweet-name"
        onChange={tweetNameChangeHandler}
      />
      <button disabled={!value} onClick={handleSearch}>
        Search Tweets
      </button>
    </div>
  );
};
