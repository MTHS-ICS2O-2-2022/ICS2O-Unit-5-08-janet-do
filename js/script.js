// Created by: Janet Do
// Created on: Sep 2020
// This function does long division and keeps subtracting until the remainder is smaller than the divisor

"use strict"

function calculate() {
  // This function divides two numbers

  // Input
  const number1 = parseInt(document.getElementById("number1").value)
  const number2 = parseInt(document.getElementById("number2").value)

  // Save input values to localStorage
  localStorage.setItem("number1", number1)
  localStorage.setItem("number2", number2)

  // Process
  let counter = 0
  let answer = 0
  let remainder = number1
  while (remainder >= number2) {
    remainder -= number2
    counter++
  }
  answer = counter

  // Output
  if (remainder > 0) {
    document.getElementById('answer').innerHTML = number1 + " ÷ " + number2 + " = " + answer + " R: " + remainder
  } else {
    document.getElementById('answer').innerHTML = number1 + " ÷ " + number2 + " = " + answer + "."
  }
}

// Retrieve saved input values when the page is loaded
window.onload = function () {
  const savedNumber1 = localStorage.getItem("number1")
  const savedNumber2 = localStorage.getItem("number2")

  if (savedNumber1 !== null) {
    document.getElementById("number1").value = savedNumber1
  }

  if (savedNumber2 !== null) {
    document.getElementById("number2").value = savedNumber2
  }
}

