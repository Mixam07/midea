import data, { getCard, resetBuy, setActive, setBuy, setFavourite, setNumber } from "./bd.js"

export const goods = {
    getGoods: data.goods,
    getGoodsAvailability: data.goodsAvailability,
    getGoodsHot: data.goodsHot,
    setFavourite: setFavourite,
    setBuy: setBuy,
    setActive: setActive,
    setNumber: setNumber,
    resetBuy: resetBuy
}

export const catalog = {
    catalog: data.catalog
}

export const search = {
    getGoods: data.goods
}

export const card = {
    getCard: getCard
}