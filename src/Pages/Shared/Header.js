import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>My Portfolio</a></li>
                        <li><a>Blog</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a href="/#" className="btn btn-ghost normal-case text-xl">ToolsCollection</a>
            </div>
            <div className='navbar-end'>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        <li><Link to="/myportfolio">My Portfolio</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="mx-auto bg-neutral">
                    <div className="dropdown dropdown-end ">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="bg-neutral menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Header;