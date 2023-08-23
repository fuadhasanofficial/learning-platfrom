import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './course.css'
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
        <Col lg={6} className='border wrap '>
            <div className='d-flex '>
                <div>
                    <img className='course-image' src={course.image} alt="" />
                </div>

                <div className='p-2'>
                    <h6 className='' > <p>{course.name}</p></h6>
                    <div>
                        <div>
                            <Icon icon="carbon:time" /> {course.duration} Month
                        </div>
                        <div>
                            <Icon icon="mdi:teacher" /> {course.mentor}
                        </div>
                    </div>
                </div>
            </div>
            <div className='btn-wrap position-absolute bottom-0 start-50 translate-middle-x'>
                <Link to={`/course/${course._id}`} className=' btn btn-info '>See more</Link>
            </div>



        </Col>
    );
};

export default Course;