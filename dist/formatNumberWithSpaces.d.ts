/**
 * Форматирует цену, добавляя разделители тысяч для лучшей читаемости
 *
 * @param {string | number | undefined} price - Цена для форматирования (может быть строкой, числом или undefined)
 * @param {string} [thousandsSeparator=' '] - Разделитель тысяч (по умолчанию пробел)
 * @param {string} [decimalSeparator=','] - Разделитель дробной части (по умолчанию запятая)
 * @param {number} [decimalDigits=0] - Количество знаков после запятой (по умолчанию 0)
 * @returns {string} Отформатированная строка цены
 *
 * @example
 * // Стандартное форматирование
 * priceFormatter(1234567); // "1 234 567"
 *
 * @example
 * // Форматирование с кастомными разделителями
 * priceFormatter(1234567.89, '.', ',', 2); // "1.234.567,89"
 *
 * @example
 * // Обработка undefined и строковых значений
 * priceFormatter('9876543'); // "9 876 543"
 * priceFormatter(undefined); // "0"
 *
 * @example
 * // Форматирование с дробной частью
 * priceFormatter(1234.56, ' ', ',', 2); // "1 234,56"
 */
export declare const formatNumberWithSpaces: (price: string | number | undefined, thousandsSeparator?: string, decimalSeparator?: string, decimalDigits?: number) => string;
