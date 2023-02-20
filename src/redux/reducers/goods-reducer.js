import { goods } from "../../api/api";
import { showMessage } from "./message-reducer";
import { getSearchGoods } from "./search-reducer";

const SET_GOODS = "SET-GOODS/goods";
const SET_GOODS_AVAILABILITY = "SET-GOODS-AVAILABILITY/goods";
const SET_GOODS_HOT = "SET-GOODS-HOT/goods";
const SET_ACTIVE = "SET-ACTIVE/goods";

const initialState = {
    active: 1,
    goods: [],
    goodsAvailability: [],
    getGoodsHot: []
}

const goodsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GOODS:
            return{
                ...state,
                goods: action.list
            }
        case SET_GOODS_AVAILABILITY:
            return{
                ...state,
                goodsAvailability: action.list
            }
        case SET_GOODS_HOT:
            return{
                ...state,
                getGoodsHot: action.list
            }
        case SET_ACTIVE:
            return{
                ...state,
                active: action.number
            }
        default:
            return state;
    }
}

export const setGoods = (list) => ({type: SET_GOODS, list});
export const setGoodsAvailability = (list) => ({type: SET_GOODS_AVAILABILITY, list});
export const setGoodsHot = (list) => ({type: SET_GOODS_HOT, list});
export const setActive = (number) => ({type: SET_ACTIVE, number});

export const getGoods = () => (dispatch) => {
    dispatch(setGoods([...goods.getGoods]));
    dispatch(setGoodsAvailability([...goods.getGoodsAvailability]));
    dispatch(setGoodsHot([...goods.getGoodsHot]));
}

export const setFavourite = (number, active = 1) => async (dispatch) => {
    if(await goods.setFavourite(number, active)){
        dispatch(showMessage("Продукт добавлен в любимое", true));
    }else{
        dispatch(showMessage("Продукт забранный из любимое", true));
    }

    dispatch(getGoods());
    dispatch(getSearchGoods());
} 

export const setBuy = (number, active = 1) => async (dispatch) => {
    if(await goods.setBuy(number, active)){
        dispatch(showMessage("Продукт добавлен в корзину", true));
    }else{
        dispatch(showMessage("Продукт забранный из корзини", true));
    }

    dispatch(getGoods());
    dispatch(getSearchGoods());
} 

export default goodsReducer;