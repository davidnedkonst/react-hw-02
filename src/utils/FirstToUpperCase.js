export default function FirstToUpperCase(str) {
    const newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}