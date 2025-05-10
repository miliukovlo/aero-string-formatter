/**
 * Функция для форматирования номера телефона
 *
 
 *
 * @param {string | number} phoneNumber - строка, либо число, которое будет отформатировано 
 * @returns {string} - возвращает отформатированную строку номера телефона
 *
 */

export const formatLocalPhoneNumber = (phoneNumber: string | number): string => {
  let cleanedPhoneNumber = '';

  // Чистим от лишних символов и преобразуем в строку
  if (typeof phoneNumber === 'number') {
    cleanedPhoneNumber = phoneNumber.toString().replace(/[^\d+]/g, '');
  } else {
    cleanedPhoneNumber = phoneNumber.replace(/[^\d+]/g, '');
  }

  // Форматируем номер телефона для +7
  if (cleanedPhoneNumber.startsWith('+7')) {
    return `+7 (${cleanedPhoneNumber.slice(2, 6)}) ${cleanedPhoneNumber.slice(6, 8)}-${cleanedPhoneNumber.slice(8, 10)}-${cleanedPhoneNumber.slice(10, 12)}`;
    // Форматируем номер телефона для 8
  } else if (cleanedPhoneNumber.startsWith('8')) {
    return `8 (${cleanedPhoneNumber.slice(1, 4)}) ${cleanedPhoneNumber.slice(4, 7)}-${cleanedPhoneNumber.slice(7, 9)}-${cleanedPhoneNumber.slice(9, 11)}`;
    // Возвращаем номер телефона без изменений
  } else {
    return cleanedPhoneNumber;
  }
};
