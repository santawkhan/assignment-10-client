/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


const Registration = () => {
    const [RegError, setRegError] = useState('')
    const [success, setSuccess] = useState('')
    const { user, createUser } = useContext(AuthContext)
    const auth = getAuth(app);

    const handleRegistration = (event) => {
        setSuccess('')
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        if (password.length < 6) {
            setRegError('Password must be greater than 6 character')
        }

        createUser(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setRegError('')
                setSuccess('User has created successfully')
                updateProfile(auth.currentUser, {
                    displayName: displayName, photoURL
                }).then(() => {
                    console.log("userUpdated")
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

            })
            .catch(error => {
                console.log(error.message)
                // setRegError(error.message)
            })


    }
    return (
        <div>
            <div className='container w-25 mx-auto mt-5 shadow p-3  bg-body-tertiary rounded'>
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
            <p className='text-center '>{RegError}</p>
            <p className='text-center '>{success}</p>
        </div >
    );
};

export default Registration;