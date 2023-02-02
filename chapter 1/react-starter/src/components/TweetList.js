import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
  //I can acces the PROPS modification with "author" from App.js and get it here with the parameter of function
  return (
    <div className="tweet-list">
      {/* <Tweet name={name} tweets={tweets} /> */}
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
