import { goods } from "../../api/api";
import { showMessage } from "./message-reducer";
import { getSearchGoods } from "./search-reducer";

const SET_GOODS = "SET-GOODS/goods";
const SET_ACTIVE = "SET-ACTIVE/goods";

const initialState = {
    active: 1,
    goods: [],
}

const goodsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GOODS:
            return{
                ...state,
                goods: action.list
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
export const setActive = (number) => ({type: SET_ACTIVE, number});

export const getGoods = () => (dispatch) => {
    dispatch(setGoods([...goods.getGoods]));
}

export const setFavourite = (id) => async (dispatch) => {
    if(await goods.setFavourite(id)){
        dispatch(showMessage("Продукт добавлен в любимое", true));
    }else{
        dispatch(showMessage("Продукт забранный из любимое", true));
    }

    dispatch(getGoods());
    dispatch(getSearchGoods());
} 

export const setBuy = (id, bool) => async (dispatch) => {
    if(await goods.setBuy(id, bool)){
        dispatch(showMessage("Продукт добавлен в корзину", true));
    }else{
        dispatch(showMessage("Продукт забранный из корзини", true));
    }

    dispatch(getGoods());
    dispatch(getSearchGoods());
} 

export const setActiveGood = (id) => async (dispatch) => {
    goods.setActive(id);
    dispatch(getGoods());
} 

export const setNumber = (id, number) => async (dispatch) => {
    goods.setNumber(id, number)
    dispatch(getGoods());
} 

export const resetBuy = () => async (dispatch) => {
    goods.resetBuy()
    dispatch(getGoods());
}

export default goodsReducer;