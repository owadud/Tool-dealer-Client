import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ItemDeleteModal from './ItemDeleteModal';
import ManageRow from './ManageRow';

const ManageItems = () => {
    const [itemDelete,setItemDeleted] = useState(null);

    const {data:tools,isLoading,refetch}= useQuery('tool',()=>fetch('https://toolwarehouse.onrender.com/tools',{
        headers: {
            
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>ManageItems:{tools.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Product Company</th>
                            <th>Ordered Quantity</th>
                            <th>Price(per item)</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool) =><ManageRow
                             key={tool._id} tool={tool} 
                             refetch={refetch} setItemDeleted={setItemDeleted}>

                            </ManageRow>)
                                
                        }
                       

                        
                    </tbody>
                </table>
            </div>
            {
                itemDelete && <ItemDeleteModal itemDelete={itemDelete}  refetch={refetch} setItemDeleted={setItemDeleted}> </ItemDeleteModal>
            }
        </div>
    );
};

export default ManageItems;