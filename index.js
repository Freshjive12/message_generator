const messageCenter = [
  "Today is a good day!",
  "Today was raining.",
  "A not so complicated task from online Code Academy.",
  "A random test. to see if i picked up anything",
  "A random test generator ussing an Array.",
];

for (let i = 0; i < messageCenter.length; i++) {
  console.log(`WOW !! ${messageCenter[i]}`);
}

console.log("Or use a function below to get a random phrase:");

const onlyOneRandomPhrase = (arr) => {
  let randomNumber = Math.floor(Math.random() * 6);

  console.log(`${arr[randomNumber]}`);
};

onlyOneRandomPhrase(messageCenter);
