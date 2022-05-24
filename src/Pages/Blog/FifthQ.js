import React from 'react';

const FifthQ = () => {
    return (
        <div className="bg-base-300">
        <h1 className="text-2xl text-center py-5 text-blue-500">5.What is a unit test? </h1>
        <p className='w-3/4 mx-auto py-5'>
        A unit can be anything you want it to be — a line of code, a method, or a class. Unit testing is a WhiteBox testing technique using which individual modules are tested to determine if there are any issues by the developer himself.The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.
        </p>
        <h1 className="text-2xl text-center py-5 text-blue-500">Why should write unit tests?</h1>
        <p className='w-3/4 mx-auto py-5'>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.Unit tests make code reuse easier and save your time </p>
    </div>
    );
};

export default FifthQ;