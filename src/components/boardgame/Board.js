import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";
import RollDice from "./dice/RollDice";
import Players from "./players/Players";
let currentPlayerTurn = 1;

function Board() {
  let addTiles = [];
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [currentScore, setCurrentPlayerScore] = useState(0);

  useEffect(() => {
    const getPlayer = { ...localStorage };
    const players = [];
    for (let key in getPlayer) {
      const { name, ID, token } = JSON.parse(getPlayer[key]);
      console.log(name);
      players.push({
        player: name,
        image:
          ID === 0
            ? require("../../img/player1_border-01.png")
            : require("../../img/player2_border-02.png"),
        Score: 0,
        token: require("../../img/tokens/token-" + token + ".png"),
      });
    }
    setCurrentPlayer(players);
  }, []);
  console.log(currentPlayer);
  //Creating tiles index
  for (let i = 1; i < 25; i++) {
    addTiles.push(i);
  }
  const playerTurn = (event, value) => {
    currentPlayer[currentPlayerTurn].Score += value;
    if (currentPlayer[currentPlayerTurn].Score === 10) {
      currentPlayer[currentPlayerTurn].Score = 1;
      console.log("go back to square 1");
    }
    setCurrentPlayerScore(currentPlayer[currentPlayerTurn].Score);
    currentPlayerTurn++;
    if (currentPlayerTurn >= 2) {
      currentPlayerTurn = 0;
    }

    return (
      <Tiles
        player1={currentPlayer[0].Score}
        player2={currentPlayer[1].Score}
      />
    );
  };
  return (
    <main className="boardContainer">
      <div className="board">
        {addTiles.map((i) => {
          return (
            <Tiles
              key={i}
              index={i}
              player1={
                currentScore === i ? (
                  <Players
                    border={currentPlayer[0].image}
                    playerTurn={currentPlayer[0].player}
                    token={currentPlayer[0].token}
                  />
                ) : null
              }
              player2={
                currentScore === i ? (
                  <Players
                    border={currentPlayer[1].image}
                    playerTurn={currentPlayer[1].player}
                    token={currentPlayer[1].token}
                  />
                ) : null
              }
            />
          );
        })}
        <div className="board__center">
          <RollDice value={playerTurn} />
        </div>
      </div>
    </main>
  );
}
export default Board;
