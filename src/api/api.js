import data, { setBuy, setFavourite } from "./bd.js"

export const goods = {
    getGoods: data.goods,
    getGoodsAvailability: data.goodsAvailability,
    getGoodsHot: data.goodsHot,
    setFavourite: (number, active) => {
        return setFavourite(number, active);
    },
    setBuy: (number, active) => {
        return setBuy(number, active);
    }
}

export const catalog = {
    catalog: data.catalog
}

export const search = {
    getGoods: data.goods
}