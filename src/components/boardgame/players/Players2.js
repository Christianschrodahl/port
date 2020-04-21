import React, { useState, useEffect } from "react";

function Players2(props) {
  const [Player, setPlayer] = useState([]);
  const [currentPlayers, setCurrentPLayers] = useState([]);
  useEffect(() => {
    const getPlayer = { ...localStorage };
    setPlayer(function (value, index = 0) {
      for (let key in getPlayer) {
        value.push({
          player: key,
          name: getPlayer[key],
          position: 0,
          border:
            index === 0
              ? "img/player1_border-01.png"
              : "img/player2_border-02.png",
          color: index === 0 ? "#d60000" : "#0000ff",
        });
        index++;
      }
      return value;
    });
    setCurrentPLayers(Player);
  }, [Player]);

  return (
    <div>
      {currentPlayers.map((players, index) => {
        const { border, color, player, position } = players;
        return (
          <div
            key={index}
            className={("board__player", player)}
            data-pos={position}
          >
            <img src={border} />
            dd
          </div>
        );
      })}
    </div>
  );
}

export default Players2;