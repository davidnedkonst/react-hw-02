export default function FirstToUpperCase(aNyStR) {
    if (!aNyStR) return '';
    const arrayOfWords = aNyStR.split(" ");
    const arrayOfWords1 = arrayOfWords.map(word => word.toLowerCase());
    const arrayOfWords2 = arrayOfWords1.map(word => word[0].toUpperCase() + word.slice(1));
    const Str = arrayOfWords2.join(" ");
    return Str;
}