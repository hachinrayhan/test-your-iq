import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <Header></Header>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Home;