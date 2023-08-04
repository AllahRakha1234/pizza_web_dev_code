import React, { useState } from 'react';

export default function GradientComp(props) {
    const [selectedGradient, setSelectedGradient] = useState('');

    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleRadioChange = (event) => {
        setSelectedGradient(event.target.value);
    };

    return (
        <>
            <div className="container d-flex flex-row mb-5 shadow-lg p-3 bg-white rounded">
                <div className="col-lg-6">
                    <h2 >{captalize(props.gradient.gradType)}</h2>
                    {props.gradient.options.map((option, index) => (
                        // <div className={props.gradient.gradType} key={index}>
                        <div className="d-flex flex-row" key={index}>
                            <input
                                id={`rad${index + 1}`}
                                className="rad"
                                name={props.gradient.gradType}
                                type="radio"
                                value={option}
                                onChange={handleRadioChange}
                            // checked={selectedGradient === option}
                            />
                            &nbsp; <span><h4>{option}</h4></span>
                        </div>
                    ))}
                </div>
                <div className=" col-lg-6 overflow-hidden"
                    style={{ width: "40vw", height: "40vh", overflow: "hidden" }}>
                    <img className='customePizzaImg' src={props.gradient.image} alt="" />
                </div>
            </div>
        </>
    );
}
