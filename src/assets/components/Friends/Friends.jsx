import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData();
        
    return (
        <div className='text-center'>
            my friend :{data.length}
            <div className='text-center'>
            {
                data.map(friend => <Friend
                key ={friend.id}
                friend= {friend}
                ></Friend>)
            }
            </div>

        </div>
    );
};

export default Friends;