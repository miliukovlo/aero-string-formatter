/**
 * Функция для форматирования даты
 *
 
 *
 * @param {Date} date - Дата для форматирования, тип данных Date
 * @returns {string} - вернется дата в виде строки
 *
 */

const formatDateToString = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
};

export { formatDateToString };
