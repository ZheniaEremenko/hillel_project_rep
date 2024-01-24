function GoogleLinkRedirect() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Перехід на гугл пейджу");
        }, 1000);
    });
}

function ClickSearchfiledFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Наприклад тут я буду жмакать на кнопку");
        }, 1500);
    });
}

function AddTextinSearchFieldFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("А тут я хотів би вводити текст у поле");
        }, 2000);
    });
}

GoogleLinkRedirect()
    .then(result1 => {
        console.log(result1);
        return ClickSearchfiledFunction();
    })
    .then(result2 => {
        console.log(result2);
        return AddTextinSearchFieldFunction();
    })
    .then(result3 => {
        console.log(result);
    })
    .catch(error => {
        console.error("Помилка яку я передаю бо у мене неправильно вказано ім'я 3 функції:", error);
    });

console.log("====================================================================================================================")