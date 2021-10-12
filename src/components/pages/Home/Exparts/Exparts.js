import React, { useState } from 'react';
import { useEffect } from 'react';
import Expart from '../Expart/Expart';
import './exparts.css'


const Exparts = () => {
    const [macanic, setMacanic] = useState([])
    useEffect(() => {
        fetch('./exparts.json')
            .then(res => res.json())
            .then(Data => setMacanic(Data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-warning text-center py-5">Our Exparts</h1>
            <div className="row expart-container">
                {
                    macanic.map(expart => <Expart
                        expart={expart}
                        key={expart.id}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;