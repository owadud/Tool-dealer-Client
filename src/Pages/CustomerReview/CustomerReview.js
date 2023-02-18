import React, { useEffect, useState } from 'react';
import DisplayReview from './DisplayReview';

const CustomerReview = () => {

    
    const [reviews, setReview] = useState([]);

    

    useEffect(() => {
        fetch('https://toolwarehouse.onrender.com/reviews')
            .then(res => res.json())
            .then(data => 
                setReview(data));
            
    }, []);
    return (
        <div>
            <h1 className="text-2xl text-center py-5 text-green-700">Customer Review</h1>

            <div className='py-5 grid lg:grid-cols-3  gap-5 py-10 sm:grid-cols-1'>
                {
                    reviews.map(r =><DisplayReview 
                    key={r._id} r={r} > 

                    </DisplayReview>)
                }
            </div>
           
        </div>
    );
};

export default CustomerReview;