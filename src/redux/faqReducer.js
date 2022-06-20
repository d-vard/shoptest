import {
    FAQ_SHOW
} from "./types"

const intialState = {
    show: false,
}

export const faqReducer = (state = intialState, action) => {
    switch (action.type) {
        case FAQ_SHOW:
            return {
                ...state,
                show: !state.show
            }
        default:
            return state;
    }
}