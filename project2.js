const alphabet = "abcdefghijklmnopqrstuvwxyz";
let Friend = 'Brutus';
const firstLetter = Friend[0]; //B
const index = alphabet.indexOf(firstLetter.toLowerCase()); //1
const alphabetLength = 26; //26
const newIndex = (1 + 3) % alphabetLength; //4
const encryptedFirstLetter = alphabet[4]; //e
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3); // EUX

//question 1 
//indexes start at 0 so the result is the position -1 (2-1=1)

//question 2
//the modulo operator (%) would wrap the string back around to the start