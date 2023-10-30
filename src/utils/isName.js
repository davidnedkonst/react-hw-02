export default function isName(str) {

    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    const arrayOfChars = [...str.toLowerCase()];

    const result = arrayOfChars.every(a => alphabet.includes(a));
    
    return result;
};