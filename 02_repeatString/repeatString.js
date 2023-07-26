const repeatString = function(string, num) {

    if(num < 0)
    {
        return "ERROR";
    }

    let finalMessage = "";
    for(let i = 0; i < num; i++)
    {
        finalMessage = finalMessage.concat(string);
    }
    return finalMessage;
};

// Do not edit below this line
module.exports = repeatString;
