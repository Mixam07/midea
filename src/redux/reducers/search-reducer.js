import { search } from "../../api/api";

const SET_GOODS = "SET-GOODS/search";

const initialState = {
    goods: []
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GOODS:
            return{
                ...state,
                goods: [...action.goods]
            }
        default:
            return state;
    }
}

export const setSearchGoods = (goods) => ({type: SET_GOODS, goods});

export const getSearchGoods = () => (dispatch) => {
    dispatch(setSearchGoods([...search.getGoods]))
}

export default searchReducer;