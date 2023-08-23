import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <Container>
            <div >
                <Row>
                    {courses.map(course => <Course key={course._id} course={course}></Course>)}
                </Row>
            </div>
        </Container>

    );
};

export default Home;