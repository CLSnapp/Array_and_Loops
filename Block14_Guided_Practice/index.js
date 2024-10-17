const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
myInstruments.push("tuba");
myInstruments.push("bassoon");

myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");

function getFirstInstruments(instruments) {
  if (instruments.length > 0) {
    return instruments[0];
  }
}
console.log(getFirstInstruments(myInstruments));

function getLastInstrument(instruments) {
  if (instruments.length > 0) {
    return instruments[instruments.length - 1];
  }
}
console.log(getLastInstrument(myInstruments));

function getFirstAndLastInstruments(instruments) {
  return [instruments[0], instruments[instruments.length - 1]];
}
console.log(getFirstAndLastInstruments(myInstruments));

function getFirstThreeInstruments(instruments) {
  return [instruments[0], instruments[1], instruments[2]];
}
console.log(getFirstThreeInstruments(myInstruments));

function getTInstruments(instruments) {
  const returnArr = [];
  for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    if (instrument[0] === "t") {
      returnArr.push(instrument);
    }
  }
  return returnArr;
}
console.log(getTInstruments(myInstruments));

function getLongestNamedInstrument(instruments) {
  let longestInstrument = "";
  for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }
  return longestInstrument;
}
console.log(getLongestNamedInstrument(myInstruments));
