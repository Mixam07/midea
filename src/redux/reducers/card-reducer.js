import { card } from "../../api/api";

const SET_CARD = "SET-CARD/card";

const initialState = {
    card: {}
}

const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CARD:
            return{
                ...state,
                card: {...action.card}
            }
        default:
            return state;
    }
}

export const setCard = (card) => ({type: SET_CARD, card});
//ThunkCreator
export const getCard = (id) => (dispatch) => {
    console.log(card.getCard(id))
    dispatch(setCard(card.getCard(id)))
}

export default cardReducer;