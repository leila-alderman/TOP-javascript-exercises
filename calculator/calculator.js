function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	const total = arr.reduce( (accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	return total;
}

function multiply (arr) {
	const total = arr.reduce( (accumulator, currentValue) => {
		return accumulator * currentValue;
	});
	return total;
}

function power(num1, num2) {
	return num1 ** num2;	
}

function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	} else {
		for (let i=num-1; i >= 1; i--) {
			num *= i;
		}
		return num;	
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}