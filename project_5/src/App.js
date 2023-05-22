import React from "react";
import "./App.css";
import Card from "./Components/Card";

class App extends React.Component {
  state = {
    scores: [],
    gameover: false,
    player: "",
  };

  scoredGoal(team, event) {
    const eventData = {
      player: this.state.player,
      team: team,
      event: event,
    };

    const newScores = this.state.scores;
    newScores.push(eventData);
    this.setState({ scores: newScores ,player:""});
  }

  getGoalNum(team) {
    const teamScores = this.state.scores.filter((item, index) => {
      return item.team === team && item.event === "goal";
    });
    return teamScores.length;
  }

  render() {

    const homeScores = this.getGoalNum("home");
    const guestScores = this.getGoalNum("guest");
    return (
      <div className="App">
        <div className="nav">
          <Card
            name={"Home"}
            score={homeScores}
            goal={() => {
              this.scoredGoal("home", "goal");
            }}
          />
          <Card
            name={"Guest"}
            score={guestScores}
            goal={() => {
              this.scoredGoal("guest", "goal");
            }}
          />
        </div>
        <input
          value={this.state.player}
          onChange={(event) => {
            const value = event.target.value;
            this.setState({ player: value });
          }}
          placeholder="Metni nesto"
        />
      </div>
    );
  }
}

export default App;
