import React from 'react';
import './expart.css'
const Expart = (props) => {
    const { img, name, expertize } = props.expart;
    return (

        <div>

            <div class="row row-cols-1 g-4">
                <div class="col">
                    <div class="card h-100 expart-cart">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h3 class="card-title">{name}</h3>
                            <p class="card-text"><strong>{expertize}</strong></p>
                        </div>
                    </div>
                </div>

            </div>


        </div>




    );
};

export default Expart;