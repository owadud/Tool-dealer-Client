import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ item }) => {
    const { img, description, price, available, quantity, _id, company } = item;
    const navigate = useNavigate();
    const navigateOrder=(id)=>{
        navigate(`/order/${id}`);
    }
    return (
        <div className="card lg:card-side shadow-xl bg-base-300">
            <figure className="w-28 h-full"><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {company}</h2>
                <div className='bg-white py-5 px-2 w-auto text-purple-700 text-lg'>
                    <p>Minimum Quantity: {quantity}</p>
                    <p>Available Quantity: {available}</p>
                    <p>Price: {price} per item</p>
                    <p> {description}</p>
                </div>
                <div className="card-actions justify-start">
                    <button onClick={()=>navigateOrder(_id)} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ItemList;