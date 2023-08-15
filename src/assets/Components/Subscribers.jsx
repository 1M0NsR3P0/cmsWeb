import React from 'react';
import '../../../src/App.css'
import { ActivityCalendar } from 'activity-calendar-react'
import ActiveLinkBLue from '../../ActiveLinkBlue';
import { Link } from 'react-router-dom';

const Subscribers = () => {
    const colorCustomization = {
        activity0: '#dadada',
        activity1: '#0e4429',
        activity2: '#006d32',
        activity3: '#26a641',
        activity4: '#39d353',
        activity5: '#94cafd',
        activity6: '#70b5f6',
        activity7: '#5daefa',
        activity8: '#51a9fb',
        activity9: '#44a5ff',
        activity10: '#2395ff',
        activity11: '#0080F8',
    }
    const sampleData = [
        {
            count: 2,
            day: "2023-01-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-01-02",
            activity: 1
        },
        {
            count: 2,
            day: "2023-01-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-01-03",
            activity: 10
        },
        {
            count: 2,
            day: "2023-01-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-01-08",
            activity: 5
        },
        {
            count: 2,
            day: "2023-05-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-06-02",
            activity: 1
        },
        {
            count: 2,
            day: "2023-07-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-8-03",
            activity: 10
        },
        {
            count: 2,
            day: "2023-09-01",
            activity: 5
        },
        {
            count: 2,
            day: "2023-10-08",
            activity: 5
        }
    ]
    const totalSubs = 2 / 1000;
    return (
        <div>
            <div className='box-container grid-cols-4'>
                <div className='box'>
                    <span className='span'>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="email"><path d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>total subscribers</p>
                    <p className='h2' Tooltips={totalSubs * 1000 + " subscriber"}>{totalSubs}k</p>
                </div>
                <div className='box'>
                    <span className='span'>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="email"><path d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>free email subscribers</p>
                    <p className='h2'>0</p>
                </div>
                <div className='box'>
                    <span className='span relative'>
                        <div className='myBadge'>
                            <img className='w-6 h-6' src="https://i.ibb.co/tLZFL3f/icons8-fairytale-48.png" alt="" />
                        </div>
                        <div>
                            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="email">
                                <path d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"></path></svg>
                        </div>
                    </span>
                    <p className='font-semibold mt-3'>paid email subscribers</p>
                    <p className='h2'>0</p>
                </div>
                <div className='box'>
                    <span className='span relative'>
                        <div className='myBadge'>
                            w
                        </div>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="email"><path d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>webPress email subscribers</p>
                    <p className='h2'>1</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='h1'>All Time Insight</h1>
                    <div className='box w-full'>
                        <div className='Flex justify-between px-10 py-3'>
                            <h2 className='h3'>Total views</h2>
                            <div className='flex'>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white border-r-2 border-blue-500'>WebPress.mail</div></ActiveLinkBLue>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white'>Email</div></ActiveLinkBLue>
                            </div>
                        </div>
                        <div className='w-full onlyMonth justify-between'>
                            <div>
                                subscribers
                            </div>
                            <div className=''>
                                total
                            </div>
                        </div>
                        <div className='onlyMonth justify-between hover:bg-slate-200'>
                            <Link Tooltips="see content of this user" className=''><span className='py-5 underline'><a type='email' target='blank' href="/" >naimonchy@gmail.com</a></span></Link>
                            <Link className=''><span className=''>1</span></Link>
                        </div>
                        <Link className='hover:underline font-semibold' to={"/"}><span className=''>view details</span></Link>

                    </div>
                </div>
            </div>
            <div className='box w-full p-10'>
                <div className='mb-5'>
                    <h1 className='h3'>Emails</h1>
                    <p className=''>Stats from your emails will display here.</p>
                </div>
                <Link className='hover:underline font-semibold' to={"/"}><span className=''>view details</span></Link>

            </div>

            <div className='w-full text-center text-green-700'>
                alright reserved @ <a href="https://imons-world.web.app/">Me</a>
            </div>
        </div>
    );
};

export default Subscribers;