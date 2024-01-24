// Звичайна (синхронна) функція, яка повертає значення
function synchronousFunction() {
    return "Результат зі звичайної функції";
}

async function asynchronousFunction() {
    return "Результат з асинхронної функції";
}

asynchronousFunction().then(result => {
    console.log(result);
});

(async () => {
    const result = await synchronousFunction();
    console.log(result);
})();
