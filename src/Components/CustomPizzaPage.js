
import React, { useEffect } from 'react';
// import pizzaGredients from '../assets/files/pizzaGredients';
import GradientComp from './CustomPizzaComponent/GradientComp';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaGradientsAction } from "../actions/actions"

export default function CustomPizzaPage() {

    const dispatch = useDispatch();
    const pizzaGradientState = useSelector(state => state.getAllPizzaGradientsReducer);
    const { pizzasGrad, error } = pizzaGradientState;
    console.log("pizzaGradient", pizzasGrad);
    useEffect(() => {
        dispatch(getPizzaGradientsAction());
    }, [dispatch]);

    return (
        <>
            {error ? (<h1>Error while loading data ...</h1>) :
                <div className="container mt-4">
                    <h1 className='d-flex my-3 justify-content-center shadow p-3 bg-info rounded'>Make Your Own Pizza</h1>
                    <h2 className='my-3'>Choose any gradient from below to make custom pizza</h2>
                    <div className='row'>
                        {
                            pizzasGrad.map((gradient, index) => {
                                return (
                                    <div key={index}>
                                        <GradientComp index={index} gradient={gradient} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>}
        </>
    )
}
