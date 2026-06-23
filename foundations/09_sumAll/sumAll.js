const sumAll = function(a, b) {

    let sum = 0;
    
        let small; 
        let big;

        if (a < b)  {
            small = a;
            big = b;
        } else {
            small = b;
            big = a;
        }

    for (let i = small; i <= big; i++) {

            sum = sum + i
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
