import React from "react";
import TweetList from "./TweetList";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  //I can accest the PROPS modification with "author" from App.js and get it here with the parameter of function
  return (
    <div className="tweet">
      <h2 className="title">{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
