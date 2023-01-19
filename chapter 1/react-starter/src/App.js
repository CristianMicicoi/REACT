import React, { useState } from "react"; //this statement tells me that if I want using react, I must import a installed package/library
//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import style from "./styles/App.module.css";

// function App() {
//   //Here is the place I can write normal JS
//   // const name = "Dev Ed"; //If I wanna pass this variable into "tweet", for example, I use PROPS, so I go inside the component "tweet" on this page and I make the modification there(in my case, the modification is "author")
//   // const message = "I must learn React today!";
//   //Using State======================
//   const [name, setName] = useState("Dev Ed");
//   //Create our function
//   const sayHelloHandler = (e) => {
//     setName("Christian");
//     console.log(name);
//   };

//   return (
//     <div className="text">
//       {/* <CreateTweet />
//       <TweetList name={name} message={message} /> */}
//       <h1>Hello {name}</h1>
//       <button onClick={sayHelloHandler}>Click</button>
//     </div>
//   );
// }

//Also using STATE===============
function App() {
  //Here is the place I can write normal JS
  //State
  const [name, setName] = useState("Dev Ed");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "Hello!";
  return (
    <div>
      <h1 className={style.title}>Twitter Light</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
