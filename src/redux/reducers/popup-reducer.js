const SET_TYPE_POPUP = "SET-TYPE-POPUP/popup";

const initialState = {
    typePopup: ""
}

const popupReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TYPE_POPUP:
            return{
                ...state,
                typePopup: action.typePopup
            }
        default:
            return state;
    }
}

export const setTypePopup = (typePopup) => ({type: SET_TYPE_POPUP, typePopup});

export default popupReducer;