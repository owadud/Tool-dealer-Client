import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

    return (
        <div>
            <h1>My Profile</h1>
            <label className="label">
                Name:
            </label>
            <input type="text" placeholder="Type here" value={displayName} className="input input-bordered input-primary w-full max-w-xs" />
            <label className="label">
                Email:
            </label>
            <input type="text" placeholder="Type here" value={email} className="input input-bordered input-primary w-full max-w-xs" />

            <label className="label">
            <label for="my-modal" className="btn modal-button ">Update</label>


            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Sorry! The work is going on</h3>
                    <p className="py-4">Sorry Tell you that this is not available now.</p>
                    <div className="modal-action">
                        <label for="my-modal" className="btn">Thank you!</label>
                    </div>
                </div>
            </div>
            </label>
        </div>
    );
};

export default MyProfile;