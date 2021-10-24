import {combineReducers} from "redux";
import {gadgetManager} from "./gadgetManager";
import {loadingManager} from "./loadingManager";

export const allReducers = combineReducers({
    gadgetManager: gadgetManager,
    loadingHandler: loadingManager,
})