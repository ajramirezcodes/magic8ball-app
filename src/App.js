
import './App.css';
import React, { useState, useEffect } from "react";

function MagicEight() {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [shake, setShake] = useState(false);
  const [fade, setFade] = useState(false);

  const answerOptions = [
    "Yes",
    "Absolutely",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "It is certain",
    "Most likely",
    "Ask again later",
    "Cannot predict now",
    "Reply hazy, try again",
    "Better not tell you now",
    "Concentrate and ask again",
    "No",
    "My sources say no",
    "Outlook not so good",
    "Don't count on it",
    "Very doubtful",
    "No way",
    "I don't know",
    "Seems unlikely",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") {
      setAnswer(null);
      return;
    }

    setShake(true);
    setFade(false);

    setTimeout(() => {
      const randomAnswer =
        answerOptions[Math.floor(Math.random() * answerOptions.length)];
      setAnswer(randomAnswer);
      setShake(false);
      setUserInput("");
      setTimeout(() => {
        setFade(true);
      }, 100);
    }, 800);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Magic Eight Ball</h1>
        <h4 className="text-center">Know the real answer to all your questions!</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                className="form-control w-100"
                type="text"
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
                placeholder="Ask a question..."
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <br />
        <div className={`ball ${shake ? "hard-shake" : ""}`}>
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="triangle">
                <p className={`text-center ${fade ? "fade-in" : "fade-out"}`}>
                  {!answer ? "Ask a question!" : answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagicEight;



