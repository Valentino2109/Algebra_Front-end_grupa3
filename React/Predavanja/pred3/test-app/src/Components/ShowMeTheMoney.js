import React from "react";

class ShowClassText extends React.Component {
  moreMoney = this.props.money * 578;
  render() {
    const { money } = this.props;
    return (
      <p id="prviP">
        Imas {money}$, a ne bi bilo lose {this.moreMoney}$
      </p>
    );
  }
}

export default ShowClassText;

// postaviti proptpes za pomoc === line 5
// rucno sve napisati u funkciji
