import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    
    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/orders?customer=${user.email}`;
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
    }, [user])



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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr key={order._id}>
                                <th>{index+1}</th>
                                <td>{order.name}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                            </tr>)
                        }
                       

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;