import React from "react";

export const Button = (props) => {
  let symbol = "";

  switch (props.name) {
    case "c":
      symbol = "C";
      break;
    case "plus":
      symbol = "+";
      break;
    case "three":
      symbol = "3";
      break;
    case "two":
      symbol = "2";
      break;
    case "one":
      symbol = "1";
      break;
    case "percent":
      symbol = "%";
      break;
    case "divide":
      symbol = "/";
      break;
    case "seven":
      symbol = "7";
      break;
    case "eight":
      symbol = "8";
      break;
    case "nine":
      symbol = "9";
      break;
    case "multi":
      symbol = "*";
      break;
    case "four":
      symbol = "4";
      break;
    case "five":
      symbol = "5";
      break;
    case "six":
      symbol = "6";
      break;
    case "subtract":
      symbol = "-";
      break;
    case "zero":
      symbol = "0";
      break;
    case "point":
      symbol = ".";
      break;
    case "equals":
      symbol = "=";
      break;
    default:
      break;
  }

  const classes = `${props.name} key`;

  return (
    <div
      onClick={() => {
        props.onPress(symbol);
      }}
      className={classes}
      style={{ gridArea: props.name }}
    >
      {symbol}
    </div>
  );
};
