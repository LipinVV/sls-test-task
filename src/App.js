import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './app.scss';
import {createStore} from "redux";
import {allReducers} from "./reducers/reducers";
import {addGadgets, loadingStatus} from "./actions/actions";
import {Gadgets} from "./Gadgets/Gadgets";
import {LoadingScreen} from "./LoadingScreen/LoadingScreen";
import {ErrorScreen} from "./ErrorScreen/ErrorScreen";

export const store = createStore(
    allReducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
})

function App() {

    const loadingState = useSelector(state => state.loadingHandler.loadingStatus);
    const dispatch = useDispatch();

    const loadingDataHandler = async () => {
        try {
            fetch(`api/data`)
                .then(response => response.json())
                .then(data => dispatch(addGadgets({data})))
                .then(data => dispatch(loadingStatus({loadingStatus: 'success'})))
        } catch (error) {
            dispatch(loadingStatus({loadingStatus: 'error'}))
            console.error(error)
        }
    }

    const errorSimulator = () => {
        dispatch(loadingStatus({loadingStatus: 'error'}))
    }

    useEffect(() => {
        loadingDataHandler()
    }, [])

    return (
        <div className="app">
            {loadingState === 'loading' && <LoadingScreen/>}
            {loadingState === 'success' && <Gadgets loadingDataHandler={loadingDataHandler}/>}
            {loadingState === 'error' && <ErrorScreen onRefresh={loadingDataHandler}/>}
            <button
                className='app__simulation-button'
                type='button'
                onClick={errorSimulator}
            >
                Simulate Error
            </button>
        </div>
    );
}

export default App;
