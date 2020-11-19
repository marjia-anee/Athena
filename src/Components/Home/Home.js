import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import './Home.css';
import RunningProject from './RunningProject/RunningProject';
import WorkDetails from './WorkDetails/WorkDetails';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <WorkDetails></WorkDetails>
            <RunningProject></RunningProject>
           
        </div>
    );
};

export default Home;