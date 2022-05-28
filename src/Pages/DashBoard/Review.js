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
       fetch('http://localhost:5000/reviews', {

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
            
            <div class="form-control w-full max-w-xs">
            <form className='flex flex-col py-5' onSubmit={handleSubmit(onSubmit)}>
                <label class="label text-sm text-primary text-bold">
                    Name 
                </label>
            <input name='name' type="text" placeholder="Type here" value={user.displayName} class="input input-bordered w-full max-w-xs" {...register("name")} disabled/>
                <label class="label">
                    <span class="label-text">Share your feedback?</span>
                    <span>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" readonly/>
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                    </div>
                    </span>
                </label>
                <input name='review' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("review")}/>
                <label class="label">
                <input className="btn btn-active btn-success" type="submit" value="SUBMIT" />
                </label>
                </form>
                

            </div>
            
        </div>
    );
};

export default Review;