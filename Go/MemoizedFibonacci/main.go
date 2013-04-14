package main

import (
  "fmt"
)

func fibonacciPopulate(n int) []int {
  if n <= 0 {
    return []int{}
  } else if n <= 2 {
    return []int{1, 1}[0:n]
  }
  rest := fibonacciPopulate(n - 1)
  return append(rest, rest[n-2]+rest[n-3])
}

func main() {
  fmt.Println(fibonacciPopulate(25)[24])
}

