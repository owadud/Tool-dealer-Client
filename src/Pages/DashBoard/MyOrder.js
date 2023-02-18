import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    
    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const url = `https://toolwarehouse.onrender.com/orders?customer=${user.email}`;
            fetch(url,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if(res.status===401 || res.status===403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrder(data);
                });
        }
    }, [user,navigate])



    return (
        <div>
            <h1>My order:{orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Company</th>
                            <th>Ordered Quantity</th>
                            <th>Price(per item)</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr key={order._id}>
                                <th>{index+1}</th>
                                <td>{order.company}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}
                                {(order.price && !order.paid) && <span className='text-success'>paid</span>}
                                </td>
                            </tr>)
                        }
                       

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;