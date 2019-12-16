import emojipedia from './emojipedia'


//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.


const definition = emojipedia.map(function(emojipedia){
  return emojipedia.meaning.substring(0, 100)
})

console.log(definition)



const meaning = []

emojipedia.forEach(function(emojipedia){
  var grabMeaning = emojipedia.meaning.substring(0, 100)
  meaning.push(grabMeaning)
})

console.log(meaning)