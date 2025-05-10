"use strict";
/**
 * Функция для чисел типа float, заменяет точки на запятые
 *
 
 *
 * @param {number} value - Число, которое будет подставлено
 * @returns {string} - отформатированная строка
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatToString = void 0;
const floatToString = (value) => {
    return value.toString().replace('.', ',');
};
exports.floatToString = floatToString;
