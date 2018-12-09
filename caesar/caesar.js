const caesar = function(string, shift) {
    const alphabetLower = Array.from(Array(26), (e, i) => String.fromCharCode(i + 97));    
    const alphabetUpper = Array.from(Array(26), (e, i) => String.fromCharCode(i + 65));
    
    let stringArr = string.split("")
    let shiftArr = [];

    function circleBack(num) {
        if (num >= 26) {
            return circleBack(num - 26);
        } else if (num < 0) {
            return circleBack(num + 26);
        } else {
            return num;
        }
    }    
    for (i=0; i < stringArr.length; i++) {
        if (alphabetLower.includes(stringArr[i])) {
            let shiftIndex = alphabetLower.indexOf(stringArr[i]) + shift;
            if (shiftIndex >= 26 || shiftIndex < 0) {
                shiftIndex = circleBack(shiftIndex);
            }
            shiftArr.push(alphabetLower[shiftIndex]);
        } else if (alphabetUpper.includes(stringArr[i])) {
            let shiftIndex = alphabetUpper.indexOf(stringArr[i]) + shift;
            if (shiftIndex >= 26 || shiftIndex < 0) {
                shiftIndex = circleBack(shiftIndex);
            }
            shiftArr.push(alphabetUpper[shiftIndex]);
        } else {
            shiftArr.push(stringArr[i]);
        }        
    };
    return shiftArr.join('');
}

module.exports = caesar
