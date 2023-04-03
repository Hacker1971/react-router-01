import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetale = () => {
    const friend = useLoaderData();
    const {name ,email,website,phone,username} = friend;
    return (
        <div>
                        <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-24 p-9">
            <div className="card-body">
                <h2 className="card-title text-center my-3 text-2xl">{name} <span></span> ( {username})  </h2>
                <p>Email: {email}</p>
                <p>Website: {website}</p>
                <p>Phone: {phone}</p>
                
            </div>
            </div>
        </div>
    );
};
 
export default FriendDetale;