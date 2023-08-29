import React, { useState, useRef } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useReactToPrint } from 'react-to-print';

const CourseDetails = () => {
    const courseRef = useRef()
    const details = useLoaderData();
    const fullDetails = details.details;
    const shortDetails = fullDetails.slice(0, 500)
    const [courseDetails, setcourseDetails] = useState(shortDetails);
    const [seeMorebutton, setButton] = useState(true);
    const handleSeeMore = () => {
        setButton(!seeMorebutton);
        if (seeMorebutton) {
            setcourseDetails(fullDetails)
        } else (setcourseDetails(shortDetails))
    }

    const handlePrint = useReactToPrint({
        content: () => courseRef.current,
        documentTitle: `${details.name}-Details`,
        onAfterPrint: () => alert('Course Details save')
    })
    return (
        <>
            <div ref={courseRef} style={{ width: '100%' }}>
                <Row>
                    <Col lg={6} className='mx-auto'>
                        <div className='container w-lg-50 mt-10'>
                            <div>
                                <Card>
                                    <Card.Img variant="top" src={details.image} className='img-fluid ' />
                                    <Card.Body>
                                        <Card.Text>
                                            <h4 className='text-center'>{details.name}</h4>

                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <Icon icon="ri:time-line" /> {details.duration} Month
                                                </div>
                                                <div>
                                                    <Icon icon="mdi:currency-bdt" color="#a24dd6" />{details.course_fee} BDT
                                                </div>
                                                <div>
                                                    <Icon icon="healthicons:i-training-class" color="#24d47c" />{details.total_class} classes
                                                </div>
                                                <div>
                                                    <Icon icon="mingcute:code-fill" color="#e04878" /> {details.language}
                                                </div>
                                            </div>
                                        </Card.Text>

                                        <div>
                                            <p>{courseDetails} <button onClick={handleSeeMore}>{seeMorebutton ? 'see more' : 'see less'}</button> </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Button onClick={handlePrint}> Download PDF</Button>
        </>

    );
};

export default CourseDetails;