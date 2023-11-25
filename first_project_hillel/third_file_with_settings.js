const settings = 'something settings added';

function logType(value) {
    console.log(`Значение: ${value}, Тип данных: ${typeof value}`);
}
// Примеры различных типов данных
logType(42);             // Тип данных: number
logType("Hello, JS!");   // Тип данных: string
logType(true);           // Тип данных: boolean
logType(null);           // Тип данных: object (известная ошибка в языке)
logType(undefined);      // Тип данных: undefined
logType([1, 2, 3]);       // Тип данных: object (массив является объектом)
logType({ key: 'value' }); // Тип данных: object (объект)
logType(function () { });  // Тип данных: function

console.log(`==========================  ${settings}  ==========================`);