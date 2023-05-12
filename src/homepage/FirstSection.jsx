/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs';



const FirstSection = () => {
    const [chefsData, setchefsData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/chefData")
            .then(res => res.json())
            .then(data => setchefsData(data))
    }, [])
    // console.log(chefsData);
    return (

        <div className='row row-cols-1 row-cols-lg-3 mt-5'>

            {
                chefsData.map(chef => <Chefs key={chef.id} chef={chef} ></Chefs>)
            }

        </div>
    );
};

export default FirstSection;