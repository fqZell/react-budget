import { useState } from "react";
import { TYPES } from "../types/operation";
import Item from "../components/item/item";
import formatMoney from "../utils/formatMoney";

const initialItemsState = [
    {
        category: 'Продукты',
        total: 2000,
        type: TYPES.EXPENSE,
        id: 1,
        created_at: new Date('2022-01-01')
    },
    {
        category: 'Зарплата',
        total: 50000,
        type: TYPES.INCOME,
        id: 2,
        created_at: new Date('2023-01-01')
    },
    {
        category: 'Продукты',
        total: 3000,
        type: TYPES.EXPENSE,
        id: 3,
        created_at: new Date('2022-02-02')
    }
];

const HomePage = () => {
    const [items, setItems] = useState(initialItemsState);

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <header>
                        <h1>Общий баланс: {formatMoney(70000)}</h1>
                    </header>

                    <div className="form">
                        <h2>Добавить операцию</h2>
                        <form>
                            <input type="text" name="total" placeholder="30 000 руб" />
                            <select name="category">
                                <option value="salary">З/П</option>
                            </select>
                            <button className="button">
                                Добавить операцию
                            </button>
                        </form>
                    </div>

                    <div className="wrapper">
                        <h2>Операции</h2>

                        <div className="filter">
                            <button className="filter__button">Все операции</button>
                            <button className="filter__button">Все доходы</button>
                            <button className="filter__button">Все расходы</button>
                        </div>

                        <div className="items">


                            {
                                items.map((item) => <Item key={item.id} item={item} />)
                            }


                            {/* <div className="item">
                                <div className="item__left">
                                    <div className="circle expense">
                                        <i class="fa-sharp fa-solid fa-basket-shopping"></i>
                                    </div>

                                    <p className="category">
                                        Категория: продукты
                                    </p>
                                </div>

                                <div className="item__right">
                                    <p className="total">
                                        2 500 руб.
                                    </p>

                                    <button className="item__button">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div> */}
                        </div>

                        <div className="pagination">
                            <button className="pagination__button">
                                <span>1</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;