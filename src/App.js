import React from "react";
import "./App.css";
import { Button } from "./Button";
import { Display } from "./Display";

class App extends React.Component {
  state = {
    first: "",
    second: "",
    operand: "",
    result: "",
  };

  onDigitPress = (key) => {
    if (this.state.first === "") {
      this.setState({
        result: "",
      });
    }
    if (this.state.operand === "") {
      this.setState({
        first: this.state.first + key,
      });
    } else {
      this.setState({
        second: this.state.second + key,
      });
    }
  };

  onOperandPress = (key) => {
    if (this.state.operand === "") {
      this.setState({
        operand: key,
      });
    }
  };

  calculate = (a, b, operand) => {
    switch (operand) {
      case "+":
        return parseFloat(a) + parseFloat(b);
      case "-":
        return parseFloat(a) - parseFloat(b);
      case "*":
        return parseFloat(a) * parseFloat(b);
      case "/":
        return parseFloat(a) / parseFloat(b);
      default:
        break;
    }
  };

  onClearPress = (key) => {
    this.setState({
      first: "",
      second: "",
      operand: "",
      result: "",
    });
  };

  onEqualsPress = () => {
    if (this.state.second !== "") {
      this.setState({
        result: this.calculate(
          this.state.first,
          this.state.second,
          this.state.operand
        ),
        first: "",
        second: "",
        operand: "",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Display name="display" data={{ ...this.state }} />
        <Button onPress={this.onClearPress} name="c" />
        <Button onPress={this.onEqualsPress} name="equals" />
        <Button onPress={this.onOperandPress} name="percent" />
        <Button onPress={this.onOperandPress} name="multi" />
        <Button onPress={this.onOperandPress} name="divide" />
        <Button onPress={this.onOperandPress} name="subtract" />
        <Button onPress={this.onDigitPress} name="point" />
        <Button onPress={this.onOperandPress} name="plus" />
        <Button onPress={this.onDigitPress} name="nine" />
        <Button onPress={this.onDigitPress} name="eight" />
        <Button onPress={this.onDigitPress} name="seven" />
        <Button onPress={this.onDigitPress} name="six" />
        <Button onPress={this.onDigitPress} name="five" />
        <Button onPress={this.onDigitPress} name="four" />
        <Button onPress={this.onDigitPress} name="three" />
        <Button onPress={this.onDigitPress} name="two" />
        <Button onPress={this.onDigitPress} name="one" />
        <Button onPress={this.onDigitPress} name="zero" />
      </div>
    );
  }
}

export default App;
