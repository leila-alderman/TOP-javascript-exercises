const palindromes = function(phrase) {
    let phraseArr = phrase.toLowerCase().split("");
    let punctuation = [' ', '.', '?', '!', ','];
    let cleanPhraseArr = []
    for (let i=0; i<phrase.length; i++) {
        if (!punctuation.includes(phraseArr[i])) {
            cleanPhraseArr.push(phraseArr[i]);
        }
    }

    phraseArrBackwards = [];
    for (let i=cleanPhraseArr.length-1; i >= 0; i--) {
        phraseArrBackwards.push(cleanPhraseArr[i]);
    }

    let cleanPhrase = cleanPhraseArr.join("");
    let phraseBackwards = phraseArrBackwards.join("");

    console.log(cleanPhraseArr)
    console.log(phraseArrBackwards);
    return cleanPhrase === phraseBackwards;
}

module.exports = palindromes
