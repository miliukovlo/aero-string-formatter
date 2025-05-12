/**
 * Форматирует число в денежный формат согласно локали и валюте
 * 
 * @param {number} value - Числовое значение для форматирования
 * @param {string} [country='ru-RU'] - Локаль для форматирования (по умолчанию 'ru-RU')
 * @param {string} [currency='RUB'] - Валюта для отображения (код валюты по ISO 4217, по умолчанию 'RUB')
 * @param {number} [minFractionDigits=0] - Минимальное количество цифр после запятой (по умолчанию 0)
 * @param {number} [maxFractionDigits=0] - Максимальное количество цифр после запятой (по умолчанию 0)
 * @returns {string} Отформатированная денежная строка
 * 
 * @example
 * // Форматирование рублей (по умолчанию)
 * numberFormatterToPrice(1500); // "1 500 ₽"
 * 
 * @example
 * // Форматирование долларов США
 * numberFormatterToPrice(1500, 'en-US', 'USD'); // "$1,500"
 * 
 * @example
 * // Форматирование евро с двумя знаками после запятой
 * numberFormatterToPrice(1500.5, 'de-DE', 'EUR', 2, 2); // "1.500,50 €"
 */
export const formatNumberToPriceIntl = (
  value: number,
  country: string = 'ru-RU',
  currency: string = 'RUB',
  minFractionDigits: number = 0,
  maxFractionDigits: number = 0
): string => {
  return new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(value);
};