
import React from 'react'
// import InventoryPageComp from './AdminComponents.js/InventoryPageComp'

// import InventoryPageComp from './AdminComponents.js/InventoryPageComp'

import OrderPageComp from './AdminComponents.js/OrderPageComp'

export default function AdminPage() {
    return (
        <>
            <div className="container my-3">
                <nav className="adminNavbar navbar navbar-expand-lg navbar-info bg-info">
                    <div className="container d-flex flex-column">
                        <h1>Admin Panel</h1>
                        <div className="d-flex justify-content-between">
                            {/* <button className="btn btn-light mx-2">Users</button> */}
                            <button className="btn btn-light">Inventory</button>
                            <button className="btn btn-light mx-2">Orders</button>
                        </div>
                    </div>
                </nav>
                <OrderPageComp />
            </div>
        </>
    )
}

