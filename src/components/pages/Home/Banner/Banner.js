import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner01 from '../../../../images/banner/banner1.jpg';
import banner02 from '../../../../images/banner/banner2.jpg';
import banner03 from '../../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <div className="mb-4">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner01}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner03}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;