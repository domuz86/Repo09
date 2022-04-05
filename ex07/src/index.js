//Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {

  return Math.round(Math.random()*(maxNumber - minNumber + 1) + minNumber);
     
}


console.log(randomRangeNumber(0, 5));

//Only change code above this line

module.exports = randomRangeNumber();
