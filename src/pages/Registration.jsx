/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Registration = () => {
    const { user, createUser } = useContext(AuthContext)


    const handleRegistration = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;


        createUser(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className='container w-25 mx-auto mt-5'>
                <form onSubmit={handleRegistration}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name='name' className="form-control" placeholder='Your name' id="exampleInputName" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Photo Url</label>
                        <input type="text" name='photo' className="form-control" placeholder='Your photo url' id="exampleInputPhotoUrl" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>Already Logged In?  Please <Link to={`/login`} className='text-decoration-none'>Login</Link></p>
            </div >

        </div >
    );
};

export default Registration;