import { TYPES } from "../../types/operation";

const FILTERS_TYPES = {
    all: "Все операции",
    income: "Все доходы",
    expense: "Все расходы",
}

const Filter = ({ items, setFilteredItems }) => {

    const onClickFilterHundle = (type) => {
        switch(type) {
            case TYPES.INCOME:
                setFilteredItems(items.Filter((item) => item.type === TYPES.INCOME));
            break;

            case TYPES.EXPENSE:
                setFilteredItems(items.Filter((item) => item.type === TYPES.EXPENSE));
            break;

            default:
                setFilteredItems(items);

        }
    };

    const Buttons = Object.keys(FILTERS_TYPES).map((type) => {
        return (
            <button key={type} onClick={() => onClickFilterHandle(type)} className="filter__button">{FILTERS_TYPES[type]}</button>
        )
    });

    return (
        <div className="filter">
            {Buttons}
        </div>
    )
}

export default Filter;