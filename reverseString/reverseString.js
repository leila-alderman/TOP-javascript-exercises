const reverseString = function(str) {
    charArr = str.split('');
    reverseCharArr = [];
    for (let i=0; i < charArr.length; i++) {
        reverseCharArr.push(charArr[(charArr.length -1) - i]);
    }
    reverseStr = reverseCharArr.join('');
    return reverseStr;
}

module.exports = reverseString
