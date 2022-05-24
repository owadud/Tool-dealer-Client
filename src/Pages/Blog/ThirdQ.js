import React from 'react';

const ThirdQ = () => {
    return (
        <div className="bg-base-300">
            <h1 className="text-2xl text-center py-5 text-blue-500">3. How does prototypical inheritance work?</h1>
            <p className='w-3/4 mx-auto py-5'>
            JavaScript is a prototype-based, Object Oriented programming language. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.Prototypal inheritance uses the concept of prototype chaining.
            </p>
        </div>
    );
};

export default ThirdQ;