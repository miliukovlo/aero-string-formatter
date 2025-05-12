/**
 * Функция для чисел типа float, заменяет точки на запятые
 *
 
 *
 * @param {number} value - Число, которое будет подставлено
 * @returns {string} - отформатированная строка
 *
 */

export const formatFloatReplaceDot = (value: number): string => {
    return value.toString().replace('.', ',');
  };
  