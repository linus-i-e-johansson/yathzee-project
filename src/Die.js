import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceNumbers: ["one", "two", "three", "four", "five", "six"],
    val: 1,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { diceNumbers, locked, val, disabled, rolling } = this.props;
    let classes = ` Die fas fa-dice-${diceNumbers[val - 1]} fas fa-5x `;
    if (locked) {
      classes += "Die-locked ";
    }
    if (rolling) {
      classes += "Die-rolling ";
    }
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
