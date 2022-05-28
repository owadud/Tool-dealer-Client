import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddItem = () => {
    const { register,  handleSubmit,reset } = useForm();

    const uploadImgStorageKey =' 66d70bdb5afe5ff5f244e9c741cfc950';

    const {data:tools,isLoading}= useQuery('tool',()=>fetch('http://localhost:5000/tool').then(res=>res.json()));
    const onSubmit = async data => {
        // console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${uploadImgStorageKey}`;

        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result=>{
            if(result.success){
                const img =result.data.url; 
                const tool ={
                    company:data.company,
                    available:data.available,
                    quantity:data.quantity,
                    price:data.price,
                    description:data.description,
                    img:img
                  
                };

                //Sending data to database

                fetch('http://localhost:5000/tools',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(tool)
                })
                .then(res => res.json())
                .then(insertTool=>{
                    if(insertTool.insertedId){
                        toast.success("Item inserted");
                        reset();
                    }
                    else{
                        toast.error('Failed, Try again')
                    }
                   
                })



            }
            
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-xl text-gray-600">Add Item</h1>
            <form className='flex flex-col py-5' onSubmit={handleSubmit(onSubmit)}>

                Product Company:<select name='company' class="select w-full text-black-700 max-w-xs" {...register("company")}>

               
                {   
                
                    tools.map(tool=><option key={tool._id} value={tool.company} > {tool.company}</option>)
                         
                   
                }
                  
                    
               
                 </select>

                Available Quantity: <input name='available' className='mb-2 input input-bordered input-accent w-full max-w-xs' type="number" {...register("available")} required />
                Minimum Quantity: <input name='quantity' className='mb-2 input input-bordered input-accent w-full max-w-xs' type="number" {...register("quantity")} min="0" required />

                Price(per item):  <input name='price' className='mb-2 input input-bordered input-accent w-full max-w-xs' type="number" {...register("price")} required />
                Upload Picture:  <input name='img' className='mb-2 input input-bordered input-accent w-full max-w-xs' type="file" {...register("img")} required />

                Description:  <input name='description' className='mb-2 input input-bordered input-accent w-full max-w-xs' type="text" {...register("description")} required />


                


                <input className="btn btn-active btn-success" type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddItem;