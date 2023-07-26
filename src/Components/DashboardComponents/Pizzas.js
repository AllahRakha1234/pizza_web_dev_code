
import React from 'react';
import pizzasData from '../../assets/files/pizzasData';
import Pizza from './Pizza';

export default function pizzas() {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    {pizzasData.map((pizza, index) => {
                        return (
                            <Pizza pizza={pizza} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
