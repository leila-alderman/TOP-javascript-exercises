const snakeCase = function(string) {
    let snakeString = string.toLowerCase()
            .replace(/-/g, ' ')
            .replace(/\.\./g, ' ')
            .trim()
            .replace(/ /g, '_')
            .replace(/[^_A-Za-z]/g, '');
    return snakeString;
}

module.exports = snakeCase
