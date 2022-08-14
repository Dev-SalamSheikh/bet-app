import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import { makeWheel } from "./utils/makewheel";

const Main = () => {
  const colorObj = {
    purple: "#406c82",
    yellow: "#fde905",
    white: "#d5e8f2",
    warning: "#fca32f",
    green: "#00e403",
  };

  const [control, setControl] = useState("manual");
  const [wheel, setWheel] = useState([]);
  const [risk, setRisk] = useState("Medium");
  const [segment, setSegment] = useState(10);

  const initializeWheel = () => {
    return makeWheel(segment, risk, colorObj);
  };

  useEffect(() => {
    const wheelValue = initializeWheel();
    setWheel(wheelValue?.wheelData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment, risk]);

  return (
    <div className="main-area">
      <div className="game-area">
        <div className="sidebar">
          <div className="main-control">
            <div className="control">
              <div className="auto-menu">
                <div className="btn">
                  <button
                    onClick={() => setControl("manual")}
                    className={
                      control === "manual" ? "manual active" : "manual"
                    }
                  >
                    Manual
                  </button>
                  <button
                    onClick={() => setControl("auto")}
                    className={control === "auto" ? "auto active" : "auto"}
                  >
                    Auto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <div className="label">
                <span>Bet Amount</span>
                <span>$69</span>
              </div>
              <div className="input-group">
                <input type="text" />
                <div className="multi">
                  <button>
                    <span>1/2</span>
                  </button>
                  <button>
                    <span>2x</span>
                  </button>
                </div>
              </div>

              <div className="label">
                <span>Risk</span>
              </div>
              <div className="input-group">
                <select
                  value={risk}
                  onChange={(e) => setRisk(e.target.value)}
                  id=""
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="label">
                <span>Segments</span>
              </div>
              <div className="input-group">
                <select
                  value={segment}
                  onChange={(e) => setSegment(parseInt(e.target.value))}
                  id=""
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                </select>
              </div>

              {control === "auto" && (
                <>
                  <div className="label">
                    <span>Number of Bets</span>
                  </div>
                  <div className="input-group">
                    <input
                      className="bet-input"
                      type="number"
                      placeholder="Number of Bets"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              {control === "auto" ? (
                <button className="bet">Auto Start</button>
              ) : (
                <button className="bet">Bet</button>
              )}
            </div>
          </div>
        </div>
        <div className="gamebar">
          <div className="gamebar-container">
            <span className="marker">
              <img src="./arrow.png" alt="arrow" />
            </span>
            <div className="temp">
              <div className="wheel">{[...wheel]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
