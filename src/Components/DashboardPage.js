
import React, { useState } from 'react'
import Pizzas from './DashboardComponents/Pizzas'

export default function DashboardPage() {


    // const [Caution, setCaution] = useState(true);
    // setInterval(() => {
    //     setCaution(!Caution);
    // }, 5000)

    return (
        <>
            {/* <h1>DashboardPage</h1> */}
            <div style={{ height: "5vh" }}>
                <div id='badgeBox'>
                    <span className="badge p-2 text-bg-primary" >Click on Image or Title to see description!</span>
                </div>
            </div>
            <Pizzas />
        </>
    )
}
