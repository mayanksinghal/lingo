#include<stdio.h>

void main() {
  int i;
  for (i = 1; i <= 100; i++) {
    int div_three = i % 3 == 0;
    int div_five = i % 5 == 0;
    if (div_three && !div_five) {
      printf("Fizz\n");
    } else if (!div_three && div_five) {
      printf("Buzz\n");
    } else if (div_three && div_five) {
      printf("Fizz Buzz\n");
    } else {
      printf("%d\n", i);
    }
  }
};
