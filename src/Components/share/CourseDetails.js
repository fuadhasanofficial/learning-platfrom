import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const details = useLoaderData();
    return (
        <div className='container'>
            <div>
                <Card>
                    <Card.Img variant="top" src={details.image} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetails;