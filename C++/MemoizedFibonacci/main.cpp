#include<iostream>

using namespace std;

#define SIZE 26

void fibonnaci(long fib[], int size) {
  if (size == 1) {
    return;
  } else if (size == 2) {
    fib[1] = 1;
  } else if (fib[size - 1] == 0) {
    fibonnaci(fib, size - 1);
    fib[size - 1] = fib[size - 2] + fib[size - 3];
  } 
}

int main() {
  // Find 25th Fibonacci Number using memoization.
  // Yes, better solutions exist.
  long fib[SIZE] = {0};
  fibonnaci(fib, SIZE);
  cout<<fib[SIZE - 1]<<endl;
  return 0;
}
