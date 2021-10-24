import React from "react";
import {useDispatch} from "react-redux";
import {GadgetOptions} from "./GadgetOptions/GadgetOptions";
import {showGadgetOptions} from "../../actions/actions";
import './gadget.scss';

export const Gadget = ({
                           gadgetOnline,
                           gadgetUrl,
                           gadgetTitle,
                           gadgetWorkingStatus,
                           gadgetWorkingTime,
                           gadgetWorkingMessage,
                           gadgetId,
                           gadgetShowStatus
                       }) => {
    const dispatch = useDispatch();


    return (
        <div
            className='single-gadget'>
            <div
                className={gadgetOnline ? 'single-gadget__online-status' : 'single-gadget__online-status single-gadget__online-status_offline'}>{!gadgetOnline ? 'Offline' : 'Online'}</div>
            <div
                onClick={() => dispatch(showGadgetOptions(gadgetId))}
                className='single-gadget__title'>{gadgetTitle}
            </div>
            <div className='single-gadget__url'>
                <img
                    className='single-gadget__picture'
                    alt={gadgetTitle}
                    src={gadgetUrl}
                />
            </div>
            <div>
                <span
                    className={gadgetOnline ? 'single-gadget__working-status' : 'single-gadget__working-status single-gadget__working-status_alert'}>
                    {gadgetWorkingStatus ? gadgetWorkingMessage : gadgetWorkingMessage}</span>
            </div>
            <div className='single-gadget__working-time'>{gadgetWorkingTime}</div>
            {gadgetShowStatus &&
            <GadgetOptions
                gadgetTitle={gadgetTitle}
                gadgetId={gadgetId}
            />
            }
        </div>
    )
}