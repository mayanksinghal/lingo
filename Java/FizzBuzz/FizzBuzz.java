class FizzBuzz {
  public static void main(String args[]) {
    for (int i = 1; i < 101; i++) {
      boolean threeDiv = i % 3 == 0;
      boolean fiveDiv = i % 5 == 0;
      System.out.println(threeDiv ?
          (fiveDiv ? "Fizz Buzz" : "Fizz") :
          (fiveDiv ? "Buzz" : i));
    }
  }
}
