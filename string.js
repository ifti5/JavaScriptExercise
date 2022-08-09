 const lyrics = 'Tumi Bondhu Kala Pakhi';
// const doesExist = lyrics.includes('tumi');
// const lyricsLowerCase = lyrics.toLowerCase('tumi');
// const doesExist1 = lyricsLowerCase.includes(doesExist);
// console.log(doesExist);
// console.log(doesExist1);

// //String search
// console.log(lyrics.indexOf('Bondhu') )

// if(lyrics.indexOf('Tumi')!==-1){
// console.log('Exists inside the string');
// }
// else{
//     console.log('Not in string');
// }

// //Starts with
// console.log(lyrics.startsWith('Tumi'));
//  //End with

//  const filename ='mybiodata.png';
//  const m =filename.endsWith('.png');
//  console.log(m);

 //split
  const parts =lyrics.split(' ');

  //[ 'Tumi', 'Bondhu', 'Kala', 'Pakhi' ]

  const sentence = lyrics.split(' . ');
  //[ 'Tumi Bondhu Kala Pakhi' ]
 
  const char = lyrics.split('');
//   [
//   'T', 'u', 'm', 'i', ' ',
//   'B', 'o', 'n', 'd', 'h',
//   'u', ' ', 'K', 'a', 'l',
//   'a', ' ', 'P', 'a', 'k',
//   'h', 'i'
// ]



//   console.log(parts);
//   console.log(sentence);
//   console.log(char);

//5-8 porjnto print korbe
// const lyrics = 'Tumi Bondhu Kala Pakhi';
const partial = lyrics.slice(5,8);
const partial2 = lyrics.substring(5,8);
// same as slice
console.log(partial);

// //string er samner white space delete
// const greeting = '   Hello wrold!'
// console.log(greeting);
// console.log(greeting.trim());


//line join kora jay
const lines =['Tumi bondhu kala pakhi',
'Bosonto kale tomay thapraini',
'kala kala sada sada']
const newSong =lines.join('.');
console.log(newSong);