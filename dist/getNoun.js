"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoun = void 0;
/**
 * Возвращает правильное окончание
 *
 
 *
 * @param {number} amount - Число, которое будет подставлено
 * @param {string} singular - Слово в именительном падеже (Например, есть 'слон')
 * @param {string} binary - Слово в дательном падеже (Например, нет 'слона')
 * @param {string} multi - Слово множество(Например, 'слонов')
 * @returns {string} - вернет строку с указанием корректного количества и числа с окончанием
 *
 */
const getNoun = (amount, singular, binary, multi) => {
    let n = Math.abs(amount);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return `${amount} ${multi}`;
    }
    n %= 10;
    if (n === 1) {
        return `${amount} ${singular}`;
    }
    if (n >= 2 && n <= 4) {
        return `${amount} ${binary}`;
    }
    return `${amount} ${multi}`;
};
exports.getNoun = getNoun;
