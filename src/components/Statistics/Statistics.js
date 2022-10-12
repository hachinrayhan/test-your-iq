import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topics = useLoaderData().data;
    return (
        <div className='chart container mt-5'>
            <LineChart width={600} height={300} data={topics} margin={{ right: 20, bottom: 5 }}>
                <Line type="monotone" dataKey="total" stroke="#161515" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;