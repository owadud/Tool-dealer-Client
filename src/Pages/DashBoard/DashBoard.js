import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-xl">
                <h2 className="text-2xl text-blue-700">DashBoard</h2>
                {/* <!-- Page content here --> */}
                <Outlet/>
              

            </div>
            <div className="drawer-side">
                <label for="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' >MyOrders</Link ></li>
                    <li><Link to='/dashboard/profile' >MyProfile</Link ></li>
                    <li><Link to='/dashboard/review' >Review</Link ></li>
                    <li><Link to='/dashboard/customers' >Customers</Link ></li>
                   
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;