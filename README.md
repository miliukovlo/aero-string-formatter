# Aero String Formatter

![npm](https://img.shields.io/npm/v/aero-string-formatter)
![license](https://img.shields.io/npm/l/aero-string-formatter)
![downloads](https://img.shields.io/npm/dt/aero-string-formatter)
![size](https://img.shields.io/bundlephobia/min/aero-string-formatter)

Библиотека для форматирования чисел, дат и строк с поддержкой локализации /  
JavaScript/TypeScript library for formatting numbers, dates and strings with localization support

## Разработчики / Developers

| Role / Роль        | Name / Имя      | GitHub Profile |
|--------------------|----------------|----------------|
| Team Lead          | Vladimir       | [vladimirplyukhin89](https://github.com/vladimirplyukhin89) |
| Author & Developer | Leonid         | [miliukovlo](https://github.com/miliukovlo) |
| Developer          | Demid          | [knyazWeb](https://github.com/knyazWeb) |
| Developer          | Denis          | [krylv](https://github.com/krylv) |

## 📥 Установка / Installation

```bash
npm install aero-string-formatter
# или / or
yarn add aero-string-formatter
```

## Функционал / Features:

### 1. formatDateToString(date: Date): string - Форматирование даты в строку / Date to string formatting
```ts
const today = new Date();
formatDateToString(today); // "15.11.2023 14:30:00"
```

### 2. formatFloatReplaceDot(value: number): string - Замена точки на запятую / Dot to comma replacement
```ts
formatFloatReplaceDot(1234.56); // "1234,56"
```

### 3. formatLocalPhoneNumber(phone: string | number): string - Форматирование телефона / Phone number formatting
```ts
formatLocalPhoneNumber("79001234567"); // "+7 (900) 123-45-67"
formatLocalPhoneNumber(79001234567);  // "+7 (900) 123-45-67"
```

### 4. formatNumberToPriceIntl(value: number, options?) - Денежное форматирование / Currency formatting
```ts
// По умолчанию RUB / Default RUB
formatNumberToPriceIntl(1500); // "1 500 ₽"

// Доллары США / USD
formatNumberToPriceIntl(1500, { 
  locale: 'en-US', 
  currency: 'USD'
}); // "$1,500"

// Евро с копейками / Euro with cents
formatNumberToPriceIntl(1500.5, {
  locale: 'de-DE',
  currency: 'EUR',
  minFractionDigits: 2,
  maxFractionDigits: 2
}); // "1.500,50 €"
```

### 5. formatNumberToPriceString(value: string | number): string - Форматирование с единицами / Unit formatting
```ts
formatNumberToPriceString(1500); // "1.50K"
formatNumberToPriceString(2500000); // "2.50M"
```

### 6. formatNumberToRoman(num: number): string - Римские цифры / Roman numerals
```ts
formatNumberToRoman(1987); // "MCMLXXXVII"
formatNumberToRoman(2023); // "MMXXIII"
```

### 7. formatNumberWithSpaces(value, options?) - Разделители тысяч / Thousands separators
```ts
formatNumberWithSpaces(1234567); // "1 234 567"
formatNumberWithSpaces(1234567.89, {
  thousands: '.',
  decimal: ',',
  decimals: 2
}); // "1.234.567,89"
```

### 8. getNoun(count: number, forms: string[]): string - Склонение существительных / Noun pluralization
```ts
// Русский / Russian
getNoun(5, ['слон', 'слона', 'слонов']); // "слонов"
getNoun(1, ['слон', 'слона', 'слонов']); // "слон"

// English
getNoun(5, ['day', 'days', 'days']); // "days"
getNoun(1, ['day', 'days', 'days']); // "day"
```