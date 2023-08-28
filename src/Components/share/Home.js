import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthProviderContext } from '../../routes/Context/AuthContext';

const Home = () => {
    const courses = useLoaderData();
    const { user } = useContext(AuthProviderContext)
    console.log(user)
    return (
        <>
            <div className='container scroll'>
                <marquee behavior="" direction="left"> Skill development is a lifelong journey, essential for personal and professional growth. It involves deliberate practice, continuous learning, and adapting to new challenges. By honing skills, individuals empower themselves to excel and contribute effectively in a rapidly evolving world.</marquee>
            </div>
            <Container className='mt-5 mb-5'>
                <div >
                    <Row>
                        {courses.map(course => <Course key={course._id} course={course}></Course>)}
                    </Row>
                </div>
            </Container>
        </>


    );
};

export default Home;