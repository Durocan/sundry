void main() {
  print("everyday");

  for (int i = 0; i < 5; i++) {
    print('hello ${i + 1}');
  }
  
  List<int> numbers = [20, 68, 89, 251];
  
  int sum = numbers.fold(9, (e, p) => e + p);
  print(sum);

  print("trying branching");

}
