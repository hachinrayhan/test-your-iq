import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <Col>
            <Card className='card'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <h1>{name}</h1>
                    <h2>Number of Questions: {total}</h2>
                </Card.Body>
                <button className='btn btn-primary'>Start Quiz</button>
            </Card>
        </Col>
    );
};

export default Topic;