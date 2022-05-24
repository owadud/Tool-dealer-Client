import React from 'react';
import './Blog.css';

const FirstQ = () => {
    return (
        <div className="blog">
            <h1 className="text-2xl text-center py-5 text-blue-500">1. How will you improve the performance of a React Application?</h1>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-auto py-5 card bg-base-300 rounded-box place-items-center">
                    <h5 className="text-xl text-bold">Use the Production Build</h5>
                    <ul>
                        <li>Check All Warning and solve them</li>
                        <li>Install React Developer Tools for Chrome for checking your build process</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto py-5 card bg-base-300 rounded-box place-items-center">
                    <h5 className='text-xl text-bold'>Install Some Package</h5>
                    <ul>
                        <li>For the most efficient Brunch production build, install the terser-brunch <span className="bg-green-500">npm install --save-dev terser-brunch</span></li>
                        <li>For the most efficient Browserify production build, install a few plugins:<span className="bg-green-500">npm install --save-dev envify terser uglifyify</span> </li>
                        <li>For the most efficient Rollup production build, install a few plugins:<span className="bg-green-500">npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace </span></li>
                        <li>Webpack v4+ will minify your code by default in production mode.Learn more about this.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FirstQ;