/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const ChefDetails = (chef) => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
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
                <Card.Img src="../public/images/card.avif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-5 text-4xl'>Chef Details</Card.Title>
                    <Card.Text>
                        <img src={details.chef_picture} className='text-center w-25 h-25 mx-auto rounded' alt="" />
                        <p className='mt-4'>Chef Name: {details.chef_name}</p>
                        <p>{details.description}</p>
                        <p>Ratings: 5</p>
                        <button className='btn btn primary'>Add To Favourite</button>
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default ChefDetails;