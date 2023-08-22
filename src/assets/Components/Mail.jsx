import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';

const Mail = () => {
    const { msges, user } = useAppContext()

    return (
        <div>
            <div>
                {
                    msges.map(msg =>
                        <div className={`${msg.read === true ? "bg-[#f0eeee]" : ""} h-auto py-3 hover:bg-slate-100 hover:shadow-2xl`}>
                            <Link to={`/mail/${msg.id}`}><h1 className='font-mono font-medium'>{msg.title}</h1></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Mail;