/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='text-bg-dark p-3 rounded mt-5'>
            <div className='row row-cols-2 row-cols-lg-3 g-4'>
                <div className='col'> <h3>Food Recipies</h3>
                    <p>Follow us on:</p>
                    <div className='d-flex gap-3'><a href="www.facebook.com"><FaFacebookSquare /></a> <a href="www.twitter.com"><FaTwitter /></a>
                        <a href="www.instagram.com"><FaInstagram /></a><a href="www.youtube.com"><FaYoutube /></a><a href="www.linkedIn.com"><FaLinkedinIn /></a></div>
                    <button className='btn btn-primary mt-2'>Contact Us</button>
                </div>
                <div className='col'><p>Home</p>
                    <p>About Us</p>
                    <p>Portfolio</p>
                    <p>Services</p>
                </div>

                <div className='col'>
                    <h3>Resources</h3>
                    <p>Blog</p>
                    <p>Recipe Update</p>
                    <button className='btn btn-primary'> Suscribe</button>



                </div>


            </div>
            <hr />
            <div className='text-center'><p>copyright <FaCopyright /></p> <p>All rights reserved</p></div>
        </div>
    );
};

export default Footer;