import React from "react";
// import s from "../styles/Tweet.module.css";
// import "../styles/Tweet.scss";
import styled from "styled-components";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  // useEffect(() => {
  //   console.log("we run a function!!!");
  // }, []);
  //I can acces the PROPS modification with "author" from App.js and get it here with the parameter of function
  return (
    // <div className={s.tweet}>
    //<div className="tweet">
    // pentru a stiliza cu styled components, creez o variabila careia i se atribuie cuvantul styled.(elementul pe care il utilizam:div,buton, h1, p etc..) iar in loc de div sau buton folosim numele variabilei.
    <TweetStyle>
      {/* <h2 className={s.title}>{name}</h2> */}
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </TweetStyle>
  );
};

const TweetStyle = styled.div`
  background-color: "red";
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 2rem;
`;

export default Tweet;
