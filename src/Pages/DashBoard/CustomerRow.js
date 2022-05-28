import React from 'react';
import { toast } from 'react-toastify';

const CustomerRow = ({customer,index,refetch}) => {
    const { email,role } = customer;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            if(res.status===403){
                toast.error('Access denied');
            }
            res.json()})
        
        .then(data => {
            if(data.modifiedCount > 0) {
                refetch();
            toast.success(`admin created successfully`);
            }
            
        })
    }

    const removeUser = ()=>{
        fetch(`http://localhost:5000/user/${email}`,{
                    method: 'DELETE',
                    headers: {
                       
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
                   
                })
                .then(res => res.json())
                .then(deleteUser=>{
                        // console.log(deleteUser);

                    if(deleteUser.deletedCount){
                        toast.success(`${email} user is successfully Deleted`);
                        
                        refetch();
                    }
                    else{
                        toast.error('Deleted Failed, Try again')
                    }
                   
                })
    }

    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{role !=='admin'&& <button onClick={makeAdmin} class="btn btn-outline btn-success">Make Admin</button>}</td>
        <td><button onClick={removeUser} class="btn btn-outline btn-error">Remove Customer</button></td>
    </tr>
    );
};

export default CustomerRow;