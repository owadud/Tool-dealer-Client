import React from 'react';

const DisplayReview = ({r}) => {

    const {name,review} = r;
    return (
        <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{review}</p>
            <div className="card-actions justify-end">
                <button className="btn"><div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div></button>
            </div>
        </div>
    </div>
    );
};

export default DisplayReview;