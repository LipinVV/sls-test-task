import React from "react";
import './errorScreen.scss';

export const ErrorScreen = ({onRefresh}) => {
    return (
        <div className='error-screen'>
            <h1 className='error-screen__header'>Что-то пошло не так, ошибка</h1>
            <button
                type='button'
                onClick={onRefresh}
                className='error-screen__button'
            >Повторить
            </button>
        </div>
    )
}