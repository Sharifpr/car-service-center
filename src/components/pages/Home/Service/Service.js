import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, description, price, time, img } = props.service;

    return (

        <div className="row row-cols-1  g-4">
            <div className="col">
                <div className="card h-100 service">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-2">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p><strong>Price: ${price}</strong></p>
                        <strong>{time}</strong>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Service;