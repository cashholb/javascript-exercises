const sumAll = function(a, b) { 

    if(a < 0 || b < 0)
    {
        return "ERROR";
    }

    if(typeof a != 'number' || typeof b != 'number')
    {
        return "ERROR";
    }

    let smallVal = a < b ? a : b;
    let largeVal = b > a ? b : a;

    let sum = 0;
    for(let i = smallVal; i < largeVal + 1; i++)
    {
        sum += i;
    }

    console.log(sum);
    return sum;



};

// Do not edit below this line
module.exports = sumAll;
