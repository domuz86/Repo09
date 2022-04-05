//Only change code below this line

function chechSign(num) {
  
return (num === 0)?"zero":(num < 0)?"negative":"positive";

}

console.log(chechSign(10));
console.log(chechSign(-12));
console.log(chechSign(0));


//Only change code above this line

module.exports = chechSign();
