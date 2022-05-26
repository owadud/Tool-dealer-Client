import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const OrderPlace = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const { price, available, _id, company, quantity, } = item;
    const [user] = useAuthState(auth);


    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {

        const url = `http://localhost:5000/order/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id]);


    const handleChange = (event) => {

        const { quantity, ...rest } = item;
        const newQuantity = event.target.value;

        const newItem = { quantity: newQuantity, ...rest };
        setItem(newItem);


    }


    const onSubmit = data => {

        if (quantity > available) {
            return alert('Please enter a quantity greater than');
        }


        const orders = {
            orderId: _id,
            customer: user.email,
            price, available,
            name: company,
            orderQuantity: Number(quantity
            ),
            address: data.address,
            phone: data.phone




        }

        fetch('http://localhost:5000/orders', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(result => {
               if(result.success){
                toast.success('Order Placed successfully');
                reset();
               }
                else{
                    toast.error('Order already exists')
                }

            })
       

    }





    return (
        <div className='mx-auto w-1/2'>

            <h2 className='text-center text-3xl text-blue-700'>Order Details</h2>
            <form className='flex flex-col py-5' onSubmit={handleSubmit(onSubmit)}>
                Email<input name='email' className='mb-2 input input-bordered input-accent w-full max-w-xs' value={user.email} {...register("email")} disabled control />
                Product Name:<input name='name' className='mb-2 input input-bordered input-accent w-full max-w-xs' value={company} {...register("name")} disabled control />

                Available Quantity: <input name='available' className='mb-2 input input-bordered input-accent w-full max-w-xs' value={available} type="number" {...register("available")} disabled control />
                Minimum Quantity: <input name='quantity' className='mb-2 input input-bordered input-accent w-full max-w-xs' value={quantity} type="number" {...register("quantity")} onChange={handleChange} placeholder="true" min="0"/>

                Price(per item):  <input name='price' className='mb-2 input input-bordered input-accent w-full max-w-xs' value={price} type="number" {...register("price")} control disabled />
                Phone Number:<input name="phone" className='mb-2 input input-bordered input-accent w-full max-w-xs' placeholder='Phone Number' type="number" {...register("phone")} required />
                Address: <textarea name="address" className='mb-2 input input-bordered input-accent w-full max-w-xs' {...register("address")} required />

                <input className="btn btn-active btn-success" type="submit" value="Order" />
            </form>

        </div>
    );
};

export default OrderPlace;







