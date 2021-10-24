import {ACTIONS} from "../actions/actions";

export const loadingManager = (state = {loadingStatus: 'loading'}, action) => {
    switch (action.type) {
        case ACTIONS.LOADING_STATUS: {
            return {
                ...state,
                loadingStatus: action.payload
            };
        }
        default: {
            return state;
        }
    }
}