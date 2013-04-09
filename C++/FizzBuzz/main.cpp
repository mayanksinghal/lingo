#include<iostream>

using namespace std;

int main() {
  for (int i = 1; i < 101; i++) {
    bool threeDiv = i % 3 == 0;
    bool fiveDiv = i % 5 == 0;
    if (threeDiv && !fiveDiv) {
      cout<<"Fizz"<<endl;
    } else if (!threeDiv && fiveDiv) {
      cout<<"Buzz"<<endl;
    } else if (threeDiv && fiveDiv) {
      cout<<"Fizz Buzz"<<endl;
    } else {
      cout<<i<<endl;
    }
  }
  return 0;
}
