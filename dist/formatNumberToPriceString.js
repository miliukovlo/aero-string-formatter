"use strict";
/**
 * Функция для форматирования числа в строку с 3 знаками и указанием системы единиц
 *
 
 *
 * @param {string | number} value - строка, либо число, которое будет отформатировано
 * @returns {string} - вернется число с 3 знаками и указанием системы единиц
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumberToPriceString = void 0;
const formatNumberToPriceString = (value) => {
    const num = Number(value);
    if (num >= 1000000) {
        const millions = num / 1000000;
        const formatted = millions % 1 === 0 ? millions : millions.toFixed(1);
        return `${formatted.toString().replace('.', ',')} млн. ₽`;
    }
    else if (num >= 1000) {
        const thousands = num / 1000;
        const formatted = thousands % 1 === 0 ? thousands : thousands.toFixed(1);
        return `${formatted.toString().replace('.', ',')} тыс. ₽`;
    }
    return `${num.toLocaleString('ru-RU')} ₽`;
};
exports.formatNumberToPriceString = formatNumberToPriceString;
