/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Col, Row } from 'react-bootstrap';
import cardImg from './assets/images/card.avif'


const ChefDetails = (chef) => {
    const [details, setDetails] = useState([]);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const handleFavButton = (event) => {
        event.currentTarget.disabled = true;
        toast('Added Favourite Button')
    }
    useEffect(() => {
        fetch(`https://chef-website-server-santawkhan.vercel.app/chefData/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.item))
    }, [])
    console.log(details)
    // console.log(chef)
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div>

            <Card className="bg-dark text-white ">
                <Card.Img src={cardImg} className='h-100 alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-5 text-4xl'>Chef Details</Card.Title>
            <Card.Text>
                <img src={details.chef_picture} className='text-center w-25 h-25 mx-auto rounded' alt="" />
                <p className='mt-4'>Chef Name: {details.chef_name}</p>
                <p>{details.description}</p>
                <p>Ratings: 5</p>

            </Card.Text>
        </Card.ImgOverlay>
            </Card >

    <div className='mt-4 '><Row xs={1} md={2} lg={2} className="g-4 mb-3">

        <Col >
            <Card className='shadow p-3 mb-5  rounded zoom bg-danger-subtle border border-primary'>

                <Card.Body>
                    <Card.Title>{details.recipe_name_one}</Card.Title>
                    <Card.Text>
                        <p> <h4>Ingredients:</h4>{details.ingredients_one}</p>
                        <p className='fw-bold'>Cooking Method </p>
                        <p>{details.cooking_method_one}</p>
                        <div><button onClick={handleFavButton} className='btn btn-primary'>Add To Favourite</button> <ToastContainer /></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col >
            <Card className='shadow p-3 mb-5 bg-body-tertiary rounded zoom border border-primary '>

                <Card.Body>
                    <Card.Title> <h3>{details.recipe_name_two}</h3> </Card.Title>
                    <Card.Text>
                        <p> <h4>Ingredients:</h4>{details.ingredients_three}</p>
                        <p className='fw-bold'>Cooking Method </p>
                        <p>{details.cooking_method_two}</p>
                        <div><button onClick={handleFavButton} className='btn btn-primary'>Add To Favourite</button> <ToastContainer /></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col >
            <Card className='shadow p-3 mb-5 bg-body-tertiary rounded zoom border border-primary'>

                <Card.Body>
                    <Card.Title>{details.recipe_name_three}</Card.Title>
                    <Card.Text>
                        <p> <h4>Ingredients:</h4>{details.ingredients_three}</p>
                        <p className='fw-bold'>Cooking Method </p>
                        <p>{details.cooking_method_two}</p>
                        <div><button onClick={handleFavButton} className='btn btn-primary'>Add To FFavourite</button> <ToastContainer /></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>



    </Row></div>
        </div >
    );
};

export default ChefDetails;