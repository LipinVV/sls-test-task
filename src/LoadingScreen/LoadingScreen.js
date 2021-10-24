import React from "react";
import './loadingScreen.scss';
import {Ring} from 'react-spinners-css';

export const LoadingScreen = () => {
    const loadingTemplate = Array(3).fill('').map((element, index) => index + 1);

    return (
        <div className='loading-cards'>
            <h1 className='loading-cards__header'>Умные вещи</h1>
            {loadingTemplate.map(card => {
                return <div className='loading-cards__loading-card' key={card}>
                    <div className='loading-cards__loading-card loading-cards__loading-card_upper-block'> </div>
                    <div className='loading-cards__loading-card loading-cards__loading-card_middle-block'> </div>
                    <div className='loading-cards__loading-card loading-cards__loading-card_lower-block'> </div>
                </div>
            })}
            <Ring className='loading-cards__spinner' />
        </div>
    )
}