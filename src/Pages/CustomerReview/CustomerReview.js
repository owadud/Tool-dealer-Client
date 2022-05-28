import React from 'react';

const CustomerReview = () => {
    return (
        <div>
            <h1 className="text-2xl text-center py-5 text-green-700">Customer Review</h1>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn"><div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;