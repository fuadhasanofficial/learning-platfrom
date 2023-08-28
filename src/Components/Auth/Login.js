import React, { useContext } from 'react';
import { AuthProviderContext } from '../../routes/Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const { googleSignIn, logIn, githubLogIn } = useContext(AuthProviderContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGitSignIn = () => {
        githubLogIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container'>
            <Form onSubmit={handleLogIn} className=' border p-2 w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p>New on Your skill <Link to='/register'>Sign Up</Link></p>



            </Form>

            <div className='w-50 mx-auto'>
                <div className="popup-login">
                    <button className='' onClick={handleGitSignIn}>LogIn with Github</button>
                    <button className='' onClick={handleGoogleSignIn}>LogIn with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;