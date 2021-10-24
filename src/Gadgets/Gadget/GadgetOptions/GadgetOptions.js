import React from "react";
import {useDispatch} from "react-redux";
import {removeGadget, showGadgetOptions} from "../../../actions/actions";
import './gadgetOptions.scss';

export const GadgetOptions = ({gadgetTitle, gadgetId}) => {
    const dispatch = useDispatch();

    return (
        <div className='single-gadget-options'>
            <h4 className='single-gadget-options__header'>Вы хотите удалить {gadgetTitle}?</h4>
            <div className='single-gadget-options__buttons'>
                <button
                    type='button'
                    className='single-gadget-options__button'
                    onClick={() => dispatch(showGadgetOptions(gadgetId))}
                >
                    Отмена
                </button>
                <button
                    type='button'
                    className='single-gadget-options__button'
                    onClick={() => dispatch(removeGadget(gadgetId))}>
                    Удалить
                </button>
            </div>
        </div>
    )
}