const ftoc = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  tempCRound = Number(tempC.toFixed(1)); 
  return tempCRound;
}

const ctof = function(tempC) {
  let tempF = (tempC * (9/5)) + 32;
  tempFRound = Number(tempF.toFixed(1));
  return tempFRound;
}

module.exports = {
  ftoc,
  ctof
}
