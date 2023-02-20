const SHOW_MESSAGE = "SHOW-MESSAGE/message";
const DELETE_MESSAGE = "DELETE-MESSAGE/message";
const RESET_MESSAGE = "RESET-MESSAGE/message";

const initialState = {
    messages: [],
    isAddMessage: null
}

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_MESSAGE:
            return{
                ...state,
                isAddMessage: true,
                messages: [
                    ...state.messages,
                    {
                        message: action.message,
                        result: action.result
                    }
                ]
            }
        case DELETE_MESSAGE:
            return{
                ...state,
                isAddMessage: false,
                messages: state.messages.map((item, i) => {
                    if(i != action.id){
                        return item
                    }
                })
            }
        case RESET_MESSAGE:
            return{
                ...state,
                isAddMessage: false,
                messages: []
            }
        default:
            return state;
    }
}

export const showMessage = (message, result = true) => ({type: SHOW_MESSAGE, message, result});
export const deleteMessage = (id) => ({type: DELETE_MESSAGE, id});
export const resetMessage = () => ({type: RESET_MESSAGE});

export default messageReducer;