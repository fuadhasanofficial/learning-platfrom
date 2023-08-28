import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../routes/Context/AuthContext';

const Register = () => {

    const { register, } = useContext(AuthProviderContext)
    const [isChecked, setChekcked] = useState(true);
    const navigate = useNavigate()
    const handleChecked = () => {
        setChekcked(!isChecked)
    }

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })


        form.reset()
    }



    return (
        <div className='container'>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Pthot URL" />
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isChecked}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;