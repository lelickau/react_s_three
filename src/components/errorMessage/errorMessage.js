import React from 'react';
import './error.css';


const ErrorMessage = () => {
    return (
        <>
        <img className='error' src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error' />
        <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;