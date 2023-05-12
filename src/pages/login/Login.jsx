/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const { signIn } = useContext(AuthContext)

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();

        signIn(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();

            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className='container w-25 mx-auto mt-5'>
                <form onSubmit={handleLogin}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' placeholder='password' className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>New to here ?  Please <Link to={`/registration`} className='text-decoration-none'>Registration</Link></p>
            </div>
            <h3 className='text-center mt-5'>Or </h3>
            <div className='text-center mt-3'><button onClick={handleGoogleSignIn} type="button" className='btn btn-primary'>SignIn With Google <FaGoogle /></button></div>
            <div className='text-center mt-3'><button type="button" onClick={handleGitHubSignIn} className='btn btn-primary'>SignIn With Github <FaGithub /></button></div>

        </div>
    );
};

export default Login;