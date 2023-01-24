const INCOME_CATEGORIES = {
    salary: "З/П",
    cashback: "Кэшбек",
    deposit: "Вклад"
};

const EXPENSE_CATEGORIES = {
    products: "Продукты",
    services: "К/У",
    car: "Авто",
    health: "Здоровье"
};

const CATEGORIES = { ...INCOME_CATEGORIES, ... EXPENSE_CATEGORIES };

export {
    INCOME_CATEGORIES,
    EXPENSE_CATEGORIES,
    CATEGORIES
}