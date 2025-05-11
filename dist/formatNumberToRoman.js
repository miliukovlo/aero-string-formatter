"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberFormatterToRoman = void 0;
/**
 * Конвертирует арабское число в римскую цифру
 *
 * @param {number} number - Число для конвертации (должно быть в диапазоне 1-3999)
 * @returns {string} Строковое представление числа в римской нотации
 *
 * @throws {Error} Если число выходит за допустимый диапазон (меньше 1 или больше 3999)
 *
 * @example
 * // Конвертация простых чисел
 * numberFormatterToRoman(3); // "III"
 * numberFormatterToRoman(10); // "X"
 *
 * @example
 * // Конвертация чисел с комбинациями
 * numberFormatterToRoman(4); // "IV"
 * numberFormatterToRoman(9); // "IX"
 * numberFormatterToRoman(14); // "XIV"
 *
 * @example
 * // Конвертация больших чисел
 * numberFormatterToRoman(1987); // "MCMLXXXVII"
 * numberFormatterToRoman(2023); // "MMXXIII"
 *
 * @example
 * // Обработка граничных значений
 * numberFormatterToRoman(1); // "I"
 * numberFormatterToRoman(3999); // "MMMCMXCIX"
 */
const numberFormatterToRoman = (number) => {
    if (number < 1 || number > 3999) {
        throw new Error('Число должно быть в диапазоне от 1 до 3999');
    }
    return [
        { value: 1000, char: 'M' },
        { value: 900, char: 'CM' },
        { value: 500, char: 'D' },
        { value: 400, char: 'CD' },
        { value: 100, char: 'C' },
        { value: 90, char: 'XC' },
        { value: 50, char: 'L' },
        { value: 40, char: 'XL' },
        { value: 10, char: 'X' },
        { value: 9, char: 'IX' },
        { value: 5, char: 'V' },
        { value: 4, char: 'IV' },
        { value: 1, char: 'I' },
    ].reduce((result, currentValue) => {
        while (number >= currentValue.value) {
            result += currentValue.char;
            number -= currentValue.value;
        }
        return result;
    }, '');
};
exports.numberFormatterToRoman = numberFormatterToRoman;
