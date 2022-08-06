let money = prompt("Ваш бюджет на месяц?", ''),
    data = prompt("Введите дату в формате YYYY-MM-DD", '');

appData = {
    budget: money,
    timeData: {},
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let business = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a1 = prompt("Во сколько обойдется?", ''),
    a2 = prompt("Введите обязательную статью расходов в этом месяце", '');
    a3 = prompt("Во сколько обойдется?", '');

appData.expenses.business = a1;
appData.expenses.a2 = a3;

alert(appData.budget / 30);
