import React from 'react';
import { Link } from 'react-router-dom';

const DynamicLink = ({ props }) => {
    return (
        <div className='w-[100%]'>
            <div className='flex w-full justify-start items-center font-bold text-lg'>
                        <div className="w-full ">
                            <div className='grid grid-cols-3 justify-start gap-10 border py-1 rounded-sm'>
                                <div className='grid grid-cols-4 justify-start items-center gap-[200px] py-2'>
                                <h1 className='px-5'>id</h1>
                                <p className='px-5'>name</p>
                                <p className='px-5'>views</p>
                                <p className='px-5'> link</p>
                                </div>
                            </div>
                        </div>
                    </div>
            {
                props.map((every, id) => (
                    <div key={id} className='flex justify-start items-center'>
                        <div className="w-fit ">
                            <div className='grid grid-cols-3 justify-start gap-10 border py-1 hoverRow rounded-sm'>
                                <div className='grid grid-cols-4 justify-start items-center gap-[200px] py-2'>
                                <h1 className='px-5'>{id + 1}</h1>
                                <p className='px-5'>{every.name}</p>
                                <p className='px-5'>{"0"}</p>
                                <button className='px-5'> <Link className='btn-success btn-xs w-[80px] rounded-[30px] flex justify-center' to={`${every.path}`}>view</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DynamicLink;