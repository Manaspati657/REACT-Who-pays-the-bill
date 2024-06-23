import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = createContext();

const ContextProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");

  const addPlayersHandler = (name) => {
    setPlayers((prev) => {
      return [...prev, name];
    });
  };

  const removePlayerHandler = (id) => {
    const newPlayers = [...players];
    newPlayers.splice(id, 1);
    setPlayers(newPlayers);
  };

  const nextHandler = () => {
    if (players.length < 2) {
      toast.error("You need more than one player.", {
        position: "top-left",
        autoClose: 2000,
      });
    } else {
      setStage(2);
      setTimeout(() => {
        calculateResult();
      }, 2000);
    }
  };

  const calculateResult = () => {
    const result = players[Math.floor(Math.random() * players.length)];
    setResult(result);
  };

  const resetGameHandler = () => {
    setPlayers([]);
    setStage(1);
    setResult("");
  };

  return (
    <>
      <MyContext.Provider
        value={{
          //state
          stage,
          players,
          result,
          //methods
          addPlayer: addPlayersHandler,
          removePlayer: removePlayerHandler,
          next: nextHandler,
          resetGame: resetGameHandler,
          getNewLooser: calculateResult
        }}
      >
        {props.children}
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
};

export { ContextProvider, MyContext };
