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
export declare const formatNumberToRoman: (number: number) => string;
//# sourceMappingURL=formatNumberToRoman.d.ts.map