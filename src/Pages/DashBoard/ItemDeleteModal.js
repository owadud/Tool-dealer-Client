import React from 'react';
import { toast } from 'react-toastify';

const ItemDeleteModal = ({itemDelete,refetch,setItemDeleted}) => {
    const {company,_id}=itemDelete;

    const DeleteItem = (id)=>{
        fetch(`http://localhost:5000/tools/${id}`,{
                    method: 'DELETE',
                    headers: {
                       
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
                   
                })
                .then(res => res.json())
                .then(deleteTool=>{
                        console.log(deleteTool);

                    if(deleteTool.deletedCount){
                        toast.success(`${company} is successfully Deleted`);
                        setItemDeleted(null);
                        refetch();
                    }
                    else{
                        toast.error('Deleted Failed, Try again')
                    }
                   
                })
    }
    return (
        <div>

            
            <input type="checkbox" id="delete-item" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {company}?</h3>
                    <p className="py-4">You can undo this by clicking delete.</p>
                    <div className="modal-action">
                    <button className="btn btn-outline btn-warning" onClick={()=>DeleteItem(_id)}>Delete</button>
                        <label htmlFor="delete-item" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDeleteModal;