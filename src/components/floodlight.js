import { useState, useEffect } from "react";
import "./floodlight.css";

const FloodLight = () => {
  const [lights, setLights] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ]);
  const [start, setStart] = useState(0);

  const [lightstate, setLightState] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const changeLight = (state) => {
    const board = [...lightstate];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (lights[i][j] % state === 0) {
          // console.log(lights[i][j], " ", state);
          board[i][j] = board[i][j] === 0 ? 1 : 0;
        }
      }
    }
    setLightState([...board]);
  };

  useEffect(() => {
    let gametimeout;
    if (start !== 0 && start <= 100) {
      changeLight(start);
      gametimeout = setTimeout(() => {
        setStart((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(gametimeout);
      };
    }
  }, [start]);
  return (
    <div>
      <div className="boardContainer">
        <h2>Light Switch Problem</h2>
        <span>Which switch will be on after 100th guy ?</span>
        <div className="board">
          {lights.map((row, i) => {
            return (
              <div className="row">
                {row.map((el, j) => {
                  return (
                    <div
                      className={`col ${
                        lightstate[i][j] === 0 ? "dark" : "light"
                      }`}
                    >
                      <p>{lights[i][j]}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => setStart(1)} disabled={start !== 0}>
        Start
      </button>
    </div>
  );
};

export default FloodLight;
