import React from 'react';

const ItemList = ({item}) => {
    const {img,description, price, available, quantity, id,company}=item;
    return (
        <div class="card lg:card-side shadow-xl bg-base-300">
            <figure className="w-28 h-full"><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {company}</h2>
                <div class='bg-white py-5 px-2 w-auto text-purple-700 text-lg'>
                <p>Minimum Quantity: {quantity}</p>
                <p>Available Quantity: {available}</p>
                <p>Price: {price} per item</p>
                <p> {description}</p>
                </div>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ItemList;