/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SlLike } from "react-icons/sl"


const Chefs = (chef) => {
    const { chef_name, Years_of_experience, description, chef_picture
    } = chef;
    console.log(chef)
    return (

        <div className='col zoom'> <Card>
            <Card.Img variant="top" className='w-100 h-50' style={{ height: '40px' }} loading='lazy' src={chef.chef.chef_picture} />
            <Card.Body>
                <Card.Title>{chef.chef.chef_name}</Card.Title>
                <Card.Text>
                    <p>Year Of Experience:{chef.chef.Years_of_experience}</p> <br />
                    <p>Numbers of recipes:{chef.chef.Numbers_of_recipes}</p>
                    <p>Likes:5<SlLike /></p>
                    <Link to={`/chefDetails/${chef.chef.id}`}><button className='btn btn-success'>View Recipes</button></Link>
                </Card.Text>
            </Card.Body>

        </Card>
        </div>
    );
};

export default Chefs;