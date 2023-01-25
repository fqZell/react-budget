import { useEffect, useState } from "react";

import { formatMoney, calculateBalance } from "../utils";
import Storage from "../services/StorageService";

import Item from "../components/item/item";

import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import Filter from "../components/Filter/FIlter";

const initialItemsState = [];

const initialBalanceState = 0;

const HomePage = () => {
    const [balance, setBalance] = useState(initialBalanceState);
    const [items, setItems] = useState(initialItemsState);

    const [filteredItems, setFilteredItems] = useState(initialItemsState);

    useEffect(() => {
        if (Storage.isNull('items')) {
            Storage.set('items', []);
        } else {
            setItems(Storage.get('items'));
        }
    }, []);

    useEffect(() => {
        setBalance(calculateBalance(items));
        setFilteredItems(items);
    }, [items])

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <header>
                        <h1>Общий баланс: {formatMoney(balance)}</h1>
                    </header>

                    <CreateItemForm setItems={setItems} />

                    <div className="wrapper">
                        <h2>Операции</h2>

                        <Filter items={items} setFilteredItems={setFilteredItems} />

                        <div className="items">


                            {
                                filteredItems.length === 0 ? <h3>Операций пока нет</h3> :
                                filteredItems.map((item) => <Item key={item.id} item={item} />)
                            }


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