import "./App.css";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [output, setOutput] = useState(false);
  const [range, setRange] = useState(10);
  const [one, setone] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const [strengthBoxOne, setStrengthBoxOne] = useState(false);
  const [strengthBoxTwo, setStrengthBoxTwo] = useState(false);
  const [strengthBoxThree, setStrengthBoxThree] = useState(false);
  const [strengthBoxFour, setStrengthBoxFour] = useState(false);
  const [strength, setStrength] = useState("");

  const [strongCOlor, setStrongCOlor] = useState();

  const changeWidth = (event) => {
    setRange(event.target.value);
  };

  const Generate = () => {
    setOutput(true);
    setStrengthBoxOne(false);
    setStrengthBoxTwo(false);
    setStrengthBoxThree(false);
    setStrengthBoxFour(false);
    setStrongCOlor("");
    let count = 0;
    if (one) count++;
    if (two) count++;
    if (three) count++;
    if (four) count++;

    if (count == 1) {
      setStrength("TOO WEAK!");
      setStrengthBoxOne(true);
      setStrongCOlor("redBox");
    }
    if (count == 2) {
      setStrength("WEAK");
      setStrengthBoxOne(true);
      setStrengthBoxTwo(true);
      setStrongCOlor("orangeBox");
    }
    if (count == 3) {
      setStrength("MEDIUM");
      setStrengthBoxOne(true);
      setStrengthBoxTwo(true);
      setStrengthBoxThree(true);
      setStrongCOlor("yellowBox");
    }
    if (count == 4) {
      setStrength("STRONG");
      setStrengthBoxOne(true);
      setStrengthBoxTwo(true);
      setStrengthBoxThree(true);
      setStrengthBoxFour(true);
      setStrongCOlor("greenBox");
    }
    let string = "";
    if (range != 0) {
      if (one == false && two == false && three == false && four == false) {
        while (string.length != range) {
          const indx = Math.floor(Math.random() * UpperCaseletters.length);
          string += UpperCaseletters[indx];
        }
        setPassword(string);
        console.log("helooo");
      } else {
        while (string.length != range) {
          if (one) {
            const indx = Math.floor(Math.random() * UpperCaseletters.length);
            string += UpperCaseletters[indx];
            if (string.length == range) break;
          }
          if (two) {
            const indx = Math.floor(Math.random() * lowerCaseletters.length);
            string += lowerCaseletters[indx];
            if (string.length == range) break;
          }
          if (three) {
            const indx = Math.floor(Math.random() * numbers.length);
            string += numbers[indx];
            if (string.length == range) break;
          }
          if (four) {
            const indx = Math.floor(Math.random() * symbols.length);
            string += symbols[indx];
            if (string.length == range) break;
          }
        }
        setPassword(string);
      }
    } else setPassword("");
  };
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
  const UpperCaseletters = (() => {
    const caps = [...Array(26)].map((value, i) => String.fromCharCode(i + 65));
    return caps;
  })();

  const lowerCaseletters = (() => {
    return UpperCaseletters.map((letter) => letter.toLowerCase());
  })();
  const boxOneCheck = (event) => {
    setone((one) => !one);
  };
  const boxTwoCheck = () => {
    setTwo((two) => !two);
  };
  const boxThreeCheck = () => {
    setThree((three) => !three);
  };
  const boxFourCheck = () => {
    setFour((four) => !four);
  };
  const handleClick = async () => {
    const text = password
    console.log(text)
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1 className="title">Password Generator</h1>
      <div className="password_copy">
        <span className={output ? "passwordOutput" : "changePassword"}>
          {password}
        </span>
        <div onClick={handleClick}>
          <svg
            width="21"
            className="copy"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
      </div>
      <div className="main">
        <div className="main_header">
          <p className="main_title">Character Length</p>
          <span className="valueOfRange">{range}</span>
        </div>
        <input
          type="range"
          className="range"
          min="0"
          max="20"
          step={1}
          value={range}
          onChange={changeWidth}
        />
        <div className="checkBoxes">
          <div className="boxContainer">
            <div className={one ? "box_check" : "box"} onClick={boxOneCheck}>
              <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#18171F"
                  strokeWidth="3"
                  fill="none"
                  d="M1 5.607 4.393 9l8-8"
                />
              </svg>
            </div>
            <p className="main_title">Include Uppercase Letters</p>
          </div>
          <div className="boxContainer">
            <div className={two ? "box_check" : "box"} onClick={boxTwoCheck}>
              <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#18171F"
                  strokeWidth="3"
                  fill="none"
                  d="M1 5.607 4.393 9l8-8"
                />
              </svg>
            </div>
            <p className="main_title"> Include Lowercase Letters</p>
          </div>
          <div className="boxContainer">
            <div
              className={three ? "box_check" : "box"}
              onClick={boxThreeCheck}
            >
              <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#18171F"
                  strokeWidth="3"
                  fill="none"
                  d="M1 5.607 4.393 9l8-8"
                />
              </svg>
            </div>
            <p className="main_title">Include Numbers</p>
          </div>
          <div className="boxContainer">
            <div className={four ? "box_check" : "box"} onClick={boxFourCheck}>
              <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#18171F"
                  strokeWidth="3"
                  fill="none"
                  d="M1 5.607 4.393 9l8-8"
                />
              </svg>
            </div>
            <p className="main_title">Include Symbols </p>
          </div>
        </div>
        <div className="strength_medium">
          <p className="strength">STRENGTH</p>
          <div className="medium_box">
            <p className="medium">{strength}</p>
            <div className="stength_boxes">
              <div
                className={strengthBoxOne ? strongCOlor : "strength_box"}
              ></div>
              <div
                className={strengthBoxTwo ? strongCOlor : "strength_box"}
              ></div>
              <div
                className={strengthBoxThree ? strongCOlor : "strength_box"}
              ></div>
              <div
                className={strengthBoxFour ? strongCOlor : "strength_box"}
              ></div>
            </div>
          </div>
        </div>
        <button onClick={Generate}>
          <p className="generate">GENERATE</p>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24232C"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
