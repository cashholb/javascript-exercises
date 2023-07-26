const removeFromArray = function(array, ...value) {

    let finishedArray = [];

    array.forEach((element) => {
        if(!value.includes(element))
        {
            finishedArray.push(element);
        }
    });

    return finishedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
