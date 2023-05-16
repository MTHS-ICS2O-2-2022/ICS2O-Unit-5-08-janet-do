// Created by: Janet Do
// Created on: Sep 2020
// This function does long division and keeps subtracting until the remainder is smaller than the divisor

"use strict"

function calculate() {
  // This function divides two numbers

  // input
  const number1 = parseInt(document.getElementById("number1").value)
  const number2 = parseInt(document.getElementById("number2").value)

  // process
  let counter = 0
  let answer = 0
  let remainder = number1
  while (remainder >= number2) {
    remainder -= number2
    counter++
  }
  answer = counter;

  // output
  document.getElementById("numberEntered").innerHTML =
    number1 + " / " + number2 + " = " + answer + " R:" + remainder
}
