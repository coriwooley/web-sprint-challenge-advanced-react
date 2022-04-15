import React, {useState} from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/result";

export default function AppFunctional(props) {
  const [state, setState] = useState({
    message: "",
    email: "",
    steps: 0,
    x: 2,
    y: 2,
    matrix: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  });

  const moveUp = () => {
    if (state.y === 1) {
      setState({
        ...state,
        message: "You can't go up",
      });
    } else {
      const newMatrix = [...state.matrix];
      newMatrix[state.y - 1][state.x - 1] = 0;
      newMatrix[state.y - 2][state.x - 1] = 1;
      setState({
        ...state,
        matrix: newMatrix,
        y: state.y - 1,
        steps: state.steps + 1,
        message: "",
      });
    }
  };

  const moveDown = () => {
    if (state.y === 3) {
      setState({
        ...state,
        message: "You can't go down",
      });
    } else {
      const newMatrix = [...state.matrix];
      newMatrix[state.y - 1][state.x - 1] = 0;
      newMatrix[state.y][state.x - 1] = 1;
      setState({
        ...state,
        matrix: newMatrix,
        y: state.y + 1,
        steps: state.steps + 1,
        message: "",
      });
    }
  };

  const moveLeft = () => {
    if (state.x === 1) {
      setState({
        ...state,
        message: "You can't go left",
      });
    } else {
      const newMatrix = [...state.matrix];
      newMatrix[state.y - 1][state.x - 1] = 0;
      newMatrix[state.y - 1][state.x - 2] = 1;
      setState({
        ...state,
        matrix: newMatrix,
        x: state.x - 1,
        steps: state.steps + 1,
        message: "",
      });
    }
  };

  const moveRight = () => {
    if (state.x === 3) {
      setState({
        ...state,
        message: "You can't go right",
      });
    } else {
      const newMatrix = [...state.matrix];
      newMatrix[state.y - 1][state.x - 1] = 0;
      newMatrix[state.y - 1][state.x] = 1;
      setState({
        ...state,
        matrix: newMatrix,
        x: state.x + 1,
        steps: state.steps + 1,
        message: "",
      });
    }
  };

  const resetGrid = () => {
    setState({
      ...state,
      x: 2,
      y: 2,
      steps: 0,
      email: "",
      message: "",
      matrix: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    });
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">You moved {state.steps} {state.steps === 1 ? 'time' : 'times'}</h3>
      </div>
      <div id="grid">
        {
          state.matrix?.flatMap(square => square).map((squ, idx) => {
            return <div key={idx} className={`square ${squ === 1 ? "active" : ""}`}>
              {squ === 1 ? "B" : ""}
            </div>
          })
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
