import React from 'react';

const FourthQ = () => {
    return (
        <div className="bg-base-300">
            <h1 className="text-2xl text-center py-5 text-blue-500">4. Why you do not set the state directly in React?</h1>
            <p className='w-3/4 mx-auto py-5'>
                If you update it directly, calling the setState() afterward may just replace the update you made.
                When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                You will lose control of the state across all components. That's reason you can't set the state directly.
            </p>
        </div>
    );
};

export default FourthQ;