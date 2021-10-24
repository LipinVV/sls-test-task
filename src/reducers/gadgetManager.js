import {ACTIONS} from "../actions/actions";

export const gadgetManager = (state = {gadgetsState: []}, action) => {
    switch (action.type) {
        case ACTIONS.GADGET_MANAGEMENT_ADD_GADGETS: {
            return {
                ...state,
                gadgetsState: action.payload
            };
        }
        case ACTIONS.GADGET_MANAGEMENT_REMOVE_GADGET: {
            return {
                ...state,
                gadgetsState: state.gadgetsState.filter(gadget => gadget.id !== action.payload),
            }
        }
        case ACTIONS.GADGET_MANAGEMENT_SHOW_GADGET_OPTIONS: {
            return {
                ...state,
                gadgetsState: state?.gadgetsState.map(gadget => {
                    if (gadget.id === action.payload) {
                        return {
                            ...gadget,
                            showStatus: !gadget.showStatus
                        }
                    }
                    return gadget;
                })
            };
        }
        default: {
            return state;
        }
    }
}