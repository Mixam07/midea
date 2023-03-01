export const getGoodInBasket = (state) => {
    return state.goodsReducer.goods.filter(item => item.isBuy)
}

export const getIsGoodInBasket = (state) => {
    return state.goodsReducer.goods.every(item => !item.isBuy)
}

export const getGoodInFavourite = (state) => {
    return state.goodsReducer.goods.filter(item => item.isFavourite)
}

export const getAvailability = (state) => {
    return state.goodsReducer.goods.filter(item => item.isAvailability)
}

export const getHot = (state) => {
    return state.goodsReducer.goods.filter(item => item.isHot)
}

export const getNumberGoodInBasket = (state) => {
    return state.goodsReducer.goods.filter(item => item.isBuy).length
}

export const getCost = (state) => {
    let cost = 0;

    state.goodsReducer.goods.filter(item => item.isBuy && item.isActive).forEach(item => {
        cost += item.number * +item.cost.slice(0, -4).replace(" ", "")
    });

    cost = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " сум"
    return cost;
}

export const getNumberActive = (state) => {
    let number = 0;

    state.goodsReducer.goods.filter(item => item.isBuy && item.isActive).forEach((item) => {
        number += item.number
    })

    return number
}