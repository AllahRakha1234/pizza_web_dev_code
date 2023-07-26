import React from 'react'
import myImage1 from '../../assets/images/image1Slider.jpg';
import myImage2 from '../../assets/images/image3Slider.jpg';
import myImage3 from '../../assets/images/image2Slider.jpeg';

export default function Slider() {
    return (
        <>
            <div className="container mt-4">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={myImage1} className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={myImage2} className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={myImage3} className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}
