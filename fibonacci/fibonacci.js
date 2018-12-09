const fibonacci = function(index) {
    index = Number(index);
    if (index <= 0) {
        return 'OOPS';
    }
    sequence = [1, 1];
    for (i=2; i < index; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence[index-1];
}

module.exports = fibonacci
