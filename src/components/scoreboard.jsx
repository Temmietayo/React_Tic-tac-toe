import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Storage } from "./../storage/storage";

class Scoreboard extends Component {
  state = {
    scoreboard: []
  };

  // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData();

    this.setState({
      scoreboard: storage
    });
  }
  render() {
    return (
      <div>
        <div className="game">
          <h1>Recent games:</h1>

          {/* List with previous games */}
          <ul>
            {this.state.scoreboard.map((leader, key) => {
              return <li key={key}>{leader}</li>;
            })}
          </ul>

          {/* Link to start new game */}
          <Link to="/board">
            <button className="btn">Start new game</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Scoreboard;