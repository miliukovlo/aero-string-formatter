/**
 * Возвращает правильное окончание
 *
 
 *
 * @param {number} amount - Число, которое будет подставлено
 * @param {string} singular - Слово в именительном падеже (Например, есть 'слон')
 * @param {string} binary - Слово в дательном падеже (Например, нет 'слона')
 * @param {string} multi - Слово множество(Например, 'слонов')
 * @returns {string} - вернет строку с указанием корректного количества и числа с окончанием
 *
 */
declare const getNoun: (amount: number, singular: string, binary: string, multi: string) => string;
export { getNoun };
//# sourceMappingURL=getNoun.d.ts.map