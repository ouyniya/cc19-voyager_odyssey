import React, { useEffect, useState } from "react";
import Card from "./Card";
import { cardsData } from "../carts";

function Game() {
  // states
  let [cardsState, setCardsState] = useState(cardsData);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if all cards are flipped
    if (cardsData.every((card) => card.isFlipped)) {
      setShowModal(true);
    }
  }, [cardsState]);

  // kep first card info
  let [firstCard, setFirstCard] = useState(null);
  // is it first click?
  let [secondClick, setSecondClick] = useState(false);
  // set flag to wait for 1500ms
  let [wait, setWait] = useState(false);

  // functions
  const checker = async (card) => {
    if (card.name === firstCard.name) {
      card["passed"] = true;
      firstCard["passed"] = true;
      changeCardStatusHandler(card);
      changeCardStatusHandler(firstCard);
    } else {
      setWait(true);
      setTimeout(() => {
        changeCardStatusHandler(card);
        changeCardStatusHandler(firstCard);
        setWait(false);
      }, 1500);
    }
  };

  const changeCardStatusHandler = async (clickedCard) => {
    if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
    let index = cardsState.findIndex((card) => card.id === clickedCard.id);
    let newState = [...cardsState];
    newState.splice(index, 1, clickedCard);
    await setCardsState(newState);
  };

  const handleClick = async (e, clickedCard) => {
    if (wait) {
      return;
    }
    if (!secondClick) {
      await setFirstCard(clickedCard);
      await setSecondClick(true);
      changeCardStatusHandler(clickedCard);
    } else {
      await setSecondClick(false);
      changeCardStatusHandler(clickedCard);
      checker(clickedCard);
      setFirstCard(null);
    }
  };

  const congratulationsMessages = [
    "💖 Thank you, my team 💖",
    "🌈 It’s been an amazing journey 🌈",
    "🎓 Learning, growing, and succeeding together! 🎓",
    "🌍 See you again, Until next time! 🌍",
    "🔥 Hope you all achieve great success in your future projects! 🔥",
    "💼 Wishing you an amazing career ahead! See you at the top! 💼",
    "🎆 Code on, dream big, and never stop learning! See you soon! 🎆",
    "💙 This is not goodbye—just a 'see you later'! Keep in touch! 💙",
  ];

  const getRandomMessage = () => {
    return congratulationsMessages[
      Math.floor(Math.random() * congratulationsMessages.length)
    ];
  };

  return (
    <>
      <div>
        <h1>Voyager's Odyssey</h1>
        {showModal && (
          <div className="modal w-full flex flex-col justify-center items-center">
            <p className="text-white text-xl">{getRandomMessage()}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-white text-lg bg-indigo-900 w-[150px] rounded-2xl hover:bg-indigo-800 hover:cursor-pointer transition-all duration-300"
            >
              Restart
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="memory-game">
          {cardsState?.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                onClick={(e) => handleClick(e, card)}
              />
            );
          })}
          {/* <Card card={card} onClick={} /> */}
        </section>
        {/* Alert Modal */}
      </div>
    </>
  );
}

export default Game;
