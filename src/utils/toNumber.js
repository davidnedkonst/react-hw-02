export default function toNumber(str) {
    const number = ('' + str).replace(/\D/g, '');
    return number;
};