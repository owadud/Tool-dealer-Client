import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';

import CustomerRow from './CustomerRow';

const Customers = () => {

    const {data:customers, isLoading,refetch} = useQuery('customers',()=>
        fetch('http://localhost:5000/customers',{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All customers: {customers.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       customers.map((customer,index)=><CustomerRow
                       key={customer._id} index={index}
                       customer={customer} refetch={refetch}
                      
                       ></CustomerRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Customers;