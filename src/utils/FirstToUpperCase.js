export default function FirstToUpperCase(aNyStR) {
    if (!aNyStR) return '';
    const str = aNyStR.toLowerCase();
    const Str = str[0].toUpperCase() + str.slice(1);
    return Str;
}