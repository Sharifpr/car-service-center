import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Manubar from '../Manubar/Manubar';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Manubar></Manubar>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;