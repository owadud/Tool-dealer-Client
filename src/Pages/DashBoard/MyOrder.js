import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/orders?customer=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setOrder(data))
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
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Price(per item)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr>
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