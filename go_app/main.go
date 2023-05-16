// Created by: Janet Do
// Created on: Sep 2020
// This function does long division and keeps subtracting until the remainder is smaller than the divisor

package main

import (
	"fmt"
)

func main() {
	var number1, number2, counter, answer, remainder int

	// Input
	fmt.Println("Enter the first number: ")
	fmt.Scanln(&number1)
	fmt.Println("Enter the second number: ")
	fmt.Scanln(&number2)

	// Process
	counter = 0
	remainder = number1
	for remainder >= number2 {
		remainder -= number2
		counter++
	}
	answer = counter

	// Output
	fmt.Printf("%d / %d = %d R:%d\n", number1, number2, answer, remainder)
	fmt.Println("\nDone.")
}
