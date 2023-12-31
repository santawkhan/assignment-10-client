/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImg from './assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className='bg-info rounded p-3 container mt-3'>
            <h3 className="text-center mt-5 mb-2 fw-bold mb-3">Welcome To Our Restaurant</h3>
            <div className='d-flex flex-column flex-lg-row gap-3 align-items-center '>
                <div className='col'>Dear valued customers,

                    On behalf of food Recipes , it is our great pleasure to welcome you to our establishment. We are excited to have you here and hope that you have an enjoyable and satisfying dining experience with us.

                    At Foot Recipes, we pride ourselves on serving high-quality, delicious food made from the freshest and finest ingredients. Our menu features a wide variety of dishes that cater to different tastes and preferences, from traditional favorites to innovative and exciting new creations.</div>
                <div className='col'><img className='w-75%' src={bannerImg} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;