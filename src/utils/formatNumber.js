const formatNumber = (valeu) => {
    return Intl.NumberFormat('ru-RU').format(parseInt(valeu) || 0);
}

export default formatNumber;