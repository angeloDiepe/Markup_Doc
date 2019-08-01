import React from 'react';
import "./AdminRoute.css";
const AdminRoute = (props) => {
    console.log('adminRoute')
    return (
        <div id="admin-route-wrapper">
            <div id="admin-route-container">
                <h2>Choose Route:</h2>
                <div>
                    <button onClick={()=>props.setAdminRoute("manage")}>Manage</button>
                    <button onClick={()=>props.setAdminRoute("normal")}>Normal</button>
                </div>
            </div>
        </div>
    )
}
export default AdminRoute;