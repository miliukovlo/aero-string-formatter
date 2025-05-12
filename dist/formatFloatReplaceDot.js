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
exports.formatFloatReplaceDot = void 0;
const formatFloatReplaceDot = (value) => {
    return value.toString().replace('.', ',');
};
exports.formatFloatReplaceDot = formatFloatReplaceDot;
