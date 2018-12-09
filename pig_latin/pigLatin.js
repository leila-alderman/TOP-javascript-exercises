function translate(string) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
	let words = string.split(" ");
	for (let i=0; i<words.length; i++) {
		if (vowels.includes(words[i][0])) {
			words[i] = words[i].concat('ay')
		} else if (words[i].indexOf("qu") === 0) {
			words[i] = words[i].slice(2).concat(words[i].slice(0,2)).concat('ay')		
		} else if (vowels.includes(words[i][1])) {
			words[i] = words[i].slice(1).concat(words[i][0]).concat('ay')
		} else if (words[i].indexOf("qu") === 1) {
			words[i] = words[i].slice(3).concat(words[i].slice(0,3)).concat('ay')
		} else if (vowels.includes(words[i][2])) {
			words[i] = words[i].slice(2).concat(words[i].slice(0,2)).concat('ay')
		} else if (vowels.includes(words[i][3])) {
			words[i] = words[i].slice(3).concat(words[i].slice(0,3)).concat('ay')
		}
	}	
	return words.join(" ");
}


module.exports = {
	translate
}

