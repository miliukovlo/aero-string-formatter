"use strict";
/**
 * Функция для форматирования даты
 *
 
 *
 * @param {Date} date - Дата для форматирования, тип данных Date
 * @returns {string} - вернется дата в виде строки
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToString = void 0;
const formatDateToString = (date) => {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};
exports.formatDateToString = formatDateToString;
