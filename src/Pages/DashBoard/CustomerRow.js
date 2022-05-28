import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const CustomerRow = ({ customer, index, refetch, isLoading }) => {
    const { email, role } = customer;
    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = () => {
        fetch(`https://intense-ridge-54730.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Access denied');
                }
                res.json()
            })

            .then(data => {
                console.log(data);
               
                    refetch();
                    toast.success('admin created successfully');

             


            })
    }

    const removeUser = () => {
        fetch(`https://intense-ridge-54730.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(deleteUser => {
                // console.log(deleteUser);

                if (deleteUser.deletedCount) {
                    toast.success(`${email} is successfully Deleted`);

                    refetch();
                }
                else {
                    toast.error('Deleted Failed, Try again')
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={() => makeAdmin(email)} className="btn btn-outline btn-success">Make Admin</button>}</td>
            <td><button onClick={removeUser} className="btn btn-outline btn-error">Remove Customer</button></td>
        </tr>
    );
};

export default CustomerRow;