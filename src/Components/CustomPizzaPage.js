
import React from 'react';
import pizzaGredients from '../assets/files/pizzaGredients';
import GradientComp from './CustomPizzaComponent/GradientComp';
;

export default function CustomPizzaPage() {
    return (
        <>
            <div className="container mt-4">
                <h1 className='d-flex my-3 justify-content-center shadow p-3 bg-info rounded'>Make Your Own Pizza</h1>
                {/* <h1>{pizzaGredients.length}</h1> */}
                <h2 className='my-3'>Choose any gradient from below to make custom pizza</h2>
                <div className='row'>
                    {
                        pizzaGredients.map((gradient, index) => {
                            return (
                                <div key={index}>
                                    <GradientComp index={index} gradient={gradient} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
