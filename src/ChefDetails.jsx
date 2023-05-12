/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap';


const ChefDetails = (chef) => {
    const [details, setDetails] = useState([]);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const handleFavButton = (event) => {
        event.currentTarget.disabled = true;
        toast('Added Favourite Button')
    }
    useEffect(() => {
        fetch(`http://localhost:5000/chefData/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.item))
    }, [])
    console.log(details)
    // console.log(chef)
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div>

            <Card className="bg-dark text-white">
                <Card.Img src="/public/images/card.avif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-5 text-4xl'>Chef Details</Card.Title>
                    <Card.Text>
                        <img src={details.chef_picture} className='text-center w-25 h-25 mx-auto rounded' alt="" />
                        <p className='mt-4'>Chef Name: {details.chef_name}</p>
                        <p>{details.description}</p>
                        <p>Ratings: 5</p>
                        <div><button onClick={handleFavButton} className='btn btn-primary'>Add To Favourite</button> <ToastContainer /></div>
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>


        </div>
    );
};

export default ChefDetails;