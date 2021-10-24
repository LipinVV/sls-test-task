import React from "react";
import {useSelector} from "react-redux";
import {Gadget} from "./Gadget/Gadget";
import './gadgets.scss';


export const Gadgets = ({loadingDataHandler}) => {
    const currentState = useSelector(state => state.gadgetManager.gadgetsState);

    return (
        <div className='gadgets'>
            <h1 className='gadgets__header'>{currentState.length === 0 ? 'Устройства не найдены' : 'Умные вещи'}</h1>
            {currentState.map(gadget => {
                return (
                    <Gadget
                        key={gadget.id}
                        gadgetId={gadget.id}
                        gadgetOnline={gadget.isOnline}
                        gadgetTitle={gadget.title}
                        gadgetUrl={gadget.url}
                        gadgetWorkingStatus={gadget.workingStatus}
                        gadgetWorkingTime={gadget.workingTime}
                        gadgetWorkingMessage={gadget.workingMessage}
                        gadgetAlertMessage={gadget.alertMessage}
                        gadgetShowStatus={gadget.showStatus}
                    />
                )
            })}
            <button
                type='button'
                className='gadgets__refresh-button'
                onClick={loadingDataHandler}>
                Обновить
            </button>
        </div>
    )
}
