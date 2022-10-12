import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='container'>
            <Header></Header>
            <Row xs={1} md={2} className="g-5 mb-5">
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </Row>
        </div>
    );
};

export default Home;