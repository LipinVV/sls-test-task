export const ACTIONS = {
    GADGET_MANAGEMENT_ADD_GADGETS: 'GADGET_MANAGEMENT_ADD_GADGETS',
    GADGET_MANAGEMENT_REMOVE_GADGET: 'GADGET_MANAGEMENT_REMOVE_GADGET',
    GADGET_MANAGEMENT_SHOW_GADGET_OPTIONS: 'GADGET_MANAGEMENT_SHOW_GADGET_OPTIONS',
    LOADING_STATUS: 'LOADING_STATUS',
}

export const removeGadget = gadget => {
    return {
        type: ACTIONS.GADGET_MANAGEMENT_REMOVE_GADGET,
        payload: gadget
    }
}

export const addGadgets = gadgets => {
    return {
        type: ACTIONS.GADGET_MANAGEMENT_ADD_GADGETS,
        payload: gadgets.data.gadgets
    }
}

export const showGadgetOptions = status => {
    return {
        type: ACTIONS.GADGET_MANAGEMENT_SHOW_GADGET_OPTIONS,
        payload: status
    }
}

export const loadingStatus = status => {
    return {
        type: ACTIONS.LOADING_STATUS,
        payload: status.loadingStatus
    }
}