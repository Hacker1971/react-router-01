import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,email,website} = friend;
    return (
        <div >
                    <div className="card w-96 bg-base-100 shadow-2xl my-6  mx-auto">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email : {email} </p>
                <p>Website: {website}</p>
                <div className="card-actions justify-end">
                    <p className='text-red-500'>
                        <Link to = {`/friend/${id}`}>more</Link>
                    </p>
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Friend;