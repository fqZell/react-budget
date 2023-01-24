import formatNumber from "./formatNumber";

const formatMoney = (valeu, valute = "руб.") => {
    return `${formatNumber(valeu)} ${valute}`;
}

export default formatMoney;