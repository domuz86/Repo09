//Only change code below this line

var fiveNumbers ="";

function inverseWhile() {

    var i = 5;
    while (i >= 0) {
        fiveNumbers += i;
        i--;        
    }

    return fiveNumbers;
}

//Only change code above this line

console.log(inverseWhile());
module.exports = inverseWhile();
