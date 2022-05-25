import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const OrderPlace = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
  
    const onSubmit = data =>{
        data.preventDefault();
        if(data){
            navigate('/order/confirm');
        }
       
        console.log(data);
        
    }
    
   


    return (
        <div className='mx-auto w-1/2'>

        <h2>Order Details</h2>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Publisher' {...register("supply", { required: true, maxLength: 20 })} required/>
            <textarea className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Description' {...register("description")} required />
            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Price' type="number" {...register("price")}  required/>
            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Email' type="text" {...register("email")}  required/>
            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Phone Number' type="number" {...register("phone")}  required/>
            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Quantity' type="number" {...register("quantity")}  required/>
            <input className='mb-2 input input-bordered input-accent w-full max-w-xs'   placeholder='Photo URL' type="text" {...register("picture")} required />
            <input  className="btn btn-active btn-success" type="submit" value="Continue" />
        </form>
        <ToastContainer />
    </div>
    );
};

export default OrderPlace;






