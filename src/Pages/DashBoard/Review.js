import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const[user]= useAuthState(auth);
    const {displayName} =user;

    const { handleSubmit,reset,register } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const reviews = {
         name:displayName,
           review:data.review
        }
       fetch('https://intense-ridge-54730.herokuapp.com/reviews', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
               if(result.success){
                toast.success('Review Placed successfully');
               reset();
               }
                else{
                    toast.error('You have already reviewed');
                    
                }

            })

    }


    return (
        <div>
            <h1>My review</h1>
            
            <div className="form-control w-full max-w-xs">
            <form className='flex flex-col py-5' onSubmit={handleSubmit(onSubmit)}>
                <label className="label text-sm text-primary text-bold">
                    Name 
                </label>
            <input name='name' type="text" placeholder="Type here" value={user.displayName} className="input input-bordered w-full max-w-xs" {...register("name")} disabled/>
                <label className="label">
                    <span className="label-text">Share your feedback?</span>
                    <span>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readonly/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                    </div>
                    </span>
                </label>
                <input name='review' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("review")}/>
                <label className="label">
                <input className="btn btn-active btn-success" type="submit" value="SUBMIT" />
                </label>
                </form>
                

            </div>
            
        </div>
    );
};

export default Review;