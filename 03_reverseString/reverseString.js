const reverseString = function(string) {

    let finishedString = string.split("");
    finishedString = finishedString.reverse();
    finishedString = finishedString.join("");

    return finishedString;
};

// Do not edit below this line
module.exports = reverseString;
