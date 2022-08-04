import React from "react";
import "./styles/main.scss";

const Main = () => {
  return (
    <div className="main-area">
      <div className="game-area">
        <div className="sidebar">
          <div className="main-control">
            <div className="control">
              <div className="auto-menu">
                <div className="btn">
                  <button className="active">Manual</button>
                  <button>Auto</button>
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
                <select name="" id="">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="label">
                <span>Segments</span>
              </div>
              <div className="input-group">
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <button className="bet">Bet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
