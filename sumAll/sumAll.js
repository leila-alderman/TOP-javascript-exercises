const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    } else {
        let total = 0;
        if (num1 < num2) {
            for (i=num1; i <= num2; i++) {
                total += i;
            }     
        } else {
            for (i=num2; i <= num1; i++) {
                total += i;
            }
        }
        return total;
    }
}

module.exports = sumAll
