import { catalog } from "../../api/api";

const SET_CATALOG = "SET-CATALOG/catalog";

const initialState = {
    catalog: []
}

const catalogReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CATALOG:
            return{
                ...state,
                catalog: [...action.catalog]
            }
        default:
            return state;
    }
}

export const setCatalog = (catalog) => ({type: SET_CATALOG, catalog});
//ThunkCreator
export const getCatalog = () => (dispatch) => {
    dispatch(setCatalog(catalog.catalog))
}

export default catalogReducer;