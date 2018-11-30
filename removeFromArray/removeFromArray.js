const removeFromArray = function(arr) {
    let argsToRemove = Array.prototype.slice.call(arguments, 1);
    let cleanArr = [];
    outer: for (let i=0; i < arr.length; i++) {
        for (let j=0; j < argsToRemove.length; j++) {
            if (arr[i] === argsToRemove[j]) {
                continue outer;
            } 
        }
        // Push to the array in the outer loop to ensure that all of the checks happen. 
        cleanArr.push(arr[i]);
        } 
    return cleanArr;
}

module.exports = removeFromArray
