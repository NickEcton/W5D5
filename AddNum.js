const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('give me a number: ', function (res) {
      const nextNum = parseInt(res);
      sum += nextNum;
      console.log("partial sum = " + sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });

  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function(sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});
