import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    console.log(error.message, status)
    return (

        <div className='text-center mt-5'>
            <img src="/public/images/error-404.png" alt="" />
            <h3 className=''>{status || 404}</h3>
            <h2>{error?.message}</h2>
        </div>
    );
};

export default Error;