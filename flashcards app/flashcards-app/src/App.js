import './App.css';
import { useState } from 'react';
import Set from './Set';

function App() {
  const [showForm, setShowForm] = useState(false);
  // const [flashcardFormHtml, setFlashcardFormHtml] = useState('');
  const [flashcardsList, setFlashcardsList] = useState([]);
  const [flashcard, setFlashcard] = useState({ question: '', answer: '' });
  const [valoareInput, setValoareInput] = useState('');

  // if (showForm) {
  //   setFlashcardFormHtml(
  //     <div className="container">
  //       <div className="card create-card">
  //         <h3>Create Flashcard</h3>
  //         <form className="flashcard-form">
  //           <label>
  //             Question:
  //             <input type="text" />
  //           </label>
  //           <label>
  //             Answer:
  //             <input type="text" />
  //           </label>
  //         </form>

  //         <div className="card-buttons">
  //           <button className="save-card" onClick={() => console.log('Save')}>
  //             Save
  //           </button>
  //           <button className="close-card" onClick={() => console.log('Close')}>
  //             Close
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   setFlashcardFormHtml('');
  // }

  const onAddCardHandler = () => {
    setShowForm(true);
  };
  const createFlashcardHandler = () => {
    flashcardsList.push(flashcard);
    setFlashcard({ question: '', answer: '' });
    console.log(flashcardsList);
  };

  const show = (inputValue) => {
    setValoareInput(inputValue);
  };

  return (
    <div className="App">
      <Set test={valoareInput} onAdd={(name) => setValoareInput(name)} />
      <input
        type="text"
        value={valoareInput}
        onChange={(event) => show(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setValoareInput('');
          }
        }}
      />

      <div>{valoareInput}</div>

      <header>
        <div className="header-content">
          <h2>Flashcards</h2>
          <div className="btns">
            <button className="btn add-btn" onClick={onAddCardHandler}>
              Add Card
            </button>
            <button
              className="btn del-btn"
              onClick={() => setFlashcardsList([])}
            >
              Del Card
            </button>
          </div>
        </div>
      </header>

      {showForm && (
        <div className="container">
          <div className="card create-card">
            <h3>Create Flashcard</h3>
            <form className="flashcard-form">
              <label>
                Question:
                <input
                  type="text"
                  value={flashcard.question}
                  onChange={(event) =>
                    setFlashcard({
                      ...flashcard,
                      question: event.target.value,
                    })
                  }
                />
              </label>
              <label>
                Answer:
                <input
                  type="text"
                  value={flashcard.answer}
                  onChange={(event) =>
                    setFlashcard({
                      ...flashcard,
                      answer: event.target.value,
                    })
                  }
                />
              </label>
            </form>

            <div className="card-buttons">
              <button
                className="save-card"
                onClick={() => createFlashcardHandler()}
              >
                Save
              </button>
              <button className="close-card" onClick={() => setShowForm(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flashcards-container">
        {flashcardsList.map((card, index) => (
          <div
            key={index}
            className="flashcard card"
            id="1"
            onClick={() =>
              setFlashcardsList([
                ...flashcardsList.map((c, i) => {
                  if (i === index) {
                    c.showAnswer = !c.showAnswer;
                  }

                  return c;
                }),
              ])
            }
          >
            <button
              className="btn flashcard__btn"
              onClick={(event) => {
                event.stopPropagation();
                setFlashcardsList([
                  ...flashcardsList.filter((c, i) => i !== index),
                ]);
              }}
            >
              Delete
            </button>
            <hr />
            <div className="flashcard__question">{card.question}</div>
            <div
              className={`flashcard__answer ${!card.showAnswer && 'hidden'}`}
            >
              <span>{card.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
