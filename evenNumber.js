let randomNumber = Math.floor(Math.random() * 10);

if (randomNumber == 0) {
  console.log(randomNumber, 'is neither even nor odd, it is 0');

} else if (randomNumber % 2 == 0) {
  console.log(randomNumber, 'is even');

} else {
  console.log(randomNumber, 'is odd');
}