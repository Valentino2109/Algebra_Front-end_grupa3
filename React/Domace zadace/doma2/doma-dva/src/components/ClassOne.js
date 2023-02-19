import React from "react";
import { listOfPeople } from "../App";

class ClassOne extends React.Component {
  render() {
    const person = listOfPeople;
    return (
      <div className="div__four">
        <ol style={{ listStyleType: `lower-roman` }}>
          <li></li>
        </ol>
      </div>
    );
  }
}

export default ClassOne;
