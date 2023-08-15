import React, { useState, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../../public/likes.json'
import pages from '../../../public/pages.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import DynamicLink from './DynamicLink';
import { Link } from 'react-router-dom';
import GeoChart from './GeoChart';
import { useAppContext } from './Context';

const Traffic = (props) => {
    const {
        showSetting,
        toggleSetting,
        showAuthor,
        toggleAuthor,
        showVideo,
        toggleVideo,
    } = useAppContext()
    const [showPopUp, setShowPopUp] = useState(false);
    const [showPopUp1, setShowPopUp1] = useState(false);
    const [showPopUp2, setShowPopUp2] = useState(false);
    const [showPopUp3, setShowPopUp3] = useState(false);
    const [dateCount, setDateCount] = useState('daily')
    const [isActivated, setActivated] = useState(false);
    const [barData, setBarData] = useState("Views");


    const popUpHandle = () => {
        setShowPopUp(!showPopUp);
    }
    const popOutHandle = () => {
        setShowPopUp(!showPopUp);
    }
    const popUpHandle1 = () => {
        setShowPopUp1(!showPopUp1);
    }
    const popOutHandle1 = () => {
        setShowPopUp1(!showPopUp1);
    }
    const popUpHandle2 = () => {
        setShowPopUp2(!showPopUp2);
    }
    const popOutHandle2 = () => {
        setShowPopUp2(!showPopUp2);
    }
    const popUpHandle3 = () => {
        setShowPopUp3(!showPopUp3);
    }
    const popOutHandle3 = () => {
        setShowPopUp3(!showPopUp3);
    }
    const [MainData, setMainData] = useState(data.slice(-30));
    const selector = (paramoy) => {
        const newArray = [];

        if (paramoy === 'daily') {
            setDateCount('daily')
            for (let i = data.length; i >= 0; i--) {
                newArray.push(data[i])
            }
            setMainData(data.slice(-30))
        }
        if (paramoy === 'weekly') {
            setDateCount('weekly')
            for (let i = 0; i <= data.length; i += 7) {
                newArray.push(data[i])
            }
            setMainData(newArray.slice(0, 20))
        }
        if (paramoy === 'monthly') {
            setDateCount('monthly')
            for (let i = data.length; i >= 0; i = i - 30) {
                newArray.push(data[i])
            }
            setMainData(newArray.slice(0, 12))
        }
        if (paramoy === 'yearly') {
            setDateCount('yearly')
            for (let i = 0; i <= data.length; i += 360) {
                newArray.push(data[i])
            }
            setMainData(newArray.slice(-5))
        }
    }
    const activateHandle = () => {
        setActivated(!isActivated)
    }
    const barChange = (proper) => {
        setBarData(proper)
    }





    return (
        <div className='traffic-container'>
            <div className='traffic-highlights mt-5'>
                <h1>{`7`} days highlights <span>compared to previous {`7`} days</span></h1>
                <div className='traffic-box-container mt-2'>
                    <div className='box' >
                        <div className={`${showPopUp ? 'popUpAfter' : 'hidden'}`}>
                            <span>Visitors</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </span>
                        </div>
                        <div className='mb-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>

                        </div>
                        <div>Visitors</div>
                        <div onMouseEnter={popUpHandle} onMouseLeave={popOutHandle}>
                            <span className='text-4xl font-bold'>0 </span>
                            <span className='text-sm font-mono'>0(0%)</span>
                        </div>
                    </div>
                    <div className='box' >
                        <div className={`${showPopUp1 ? 'popUpAfter' : 'hidden'}`}>
                            <span>Views</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                        </div>
                        <div className='mb-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>Views</div>
                        <div onMouseEnter={popUpHandle1} onMouseLeave={popOutHandle1}>
                            <span className='text-4xl font-bold'>0 </span>
                            <span className='text-sm font-mono'>0(0%)</span>
                        </div>
                    </div>
                    <div className='box' >
                        <div className={`${showPopUp2 ? 'popUpAfter' : 'hidden'}`}>
                            <span>Likes</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                            </span>
                        </div>
                        <div className='mb-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        <div>Likes</div>
                        <div onMouseEnter={popUpHandle2} onMouseLeave={popOutHandle2} >
                            <span className='text-4xl font-bold'>0 </span>
                            <span className='text-sm font-mono'>0(0%)</span>
                        </div>
                    </div>
                    <div className='box' >
                        <div className={`${showPopUp3 ? 'popUpAfter' : 'hidden'}`}>
                            <span>Comments</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </span>
                        </div>
                        <div className='mb-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                        </div>
                        <div>Comments</div>
                        <div onMouseEnter={popUpHandle3} onMouseLeave={popOutHandle3}>
                            <span className='text-4xl font-bold'>0 </span>
                            <span className='text-sm font-mono'>0(0%)</span>
                        </div>
                    </div>
                </div>
                <div className='w-full border-b-2 my-10'></div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='h1'>August 11, 2023</h1>
                    <p><span className='text-xs'>Last update: 10:05 PM (Updates every 30 minutes)</span></p>
                </div>
                <div className='Flex gap-[100px]'>
                    <div>
                        <div className='Flex'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-0 my-16'>
                        <button onClick={() => { selector('daily') }} className={`selector-Btn ${dateCount === 'daily' && 'ActiveBlue'}`}>Daily</button>
                        <button onClick={() => { selector('weekly') }} className={`selector-Btn ${dateCount === 'weekly' && 'ActiveBlue'}`}>Weekly</button>
                        <button onClick={() => { selector('monthly') }} className={`selector-Btn ${dateCount === 'monthly' && 'ActiveBlue'}`}>monthly</button>
                        <button onClick={() => { selector('yearly') }} className={`selector-Btn ${dateCount === 'yearly' && 'ActiveBlue'}`}>Yearly</button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <div className='w-[100%] '>
                    <div className='w-[80%] text-right Flex justify-end'>
                        <div className={`myCheckbox ${isActivated && 'myCheckboxActive'}`} id='activate' onClick={activateHandle}>
                        </div>
                        <span className='text-xl font-extrabold'>{`${dateCount}`}</span>
                    </div>
                    {/* TODO || if traffic is zero the it will be hidden */}
                    <div className={``}>
                        <BarChart
                            width={1200}
                            height={400}
                            data={MainData}
                            margin={{
                                top: 5,
                                right: 10,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip content={'year'} />
                            <Legend />
                            <Bar dataKey={barData} fill="gray" background={{ fill: 'none' }} barSize={dateCount === 'daily' ? 10 : dateCount === 'weekly' ? 20 : dateCount === 'monthly' ? 30 : 50} />

                        </BarChart>
                    </div>
                    <div className='ViewBox-container mt-10'>
                        <div className='ViewBox' onClick={() => { barChange('visitors') }}>
                            <span className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Visitors</span>
                            </span>
                            <span className='text-xl font-bold'>
                                11
                            </span>
                        </div>
                        <div className='ViewBox' onClick={() => { barChange('likes') }}>
                            <span className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Likes</span>
                            </span>
                            <span className='text-xl font-bold'>
                                15
                            </span>
                        </div>
                        <div className='ViewBox' onClick={() => { barChange('comments') }}>
                            <span className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Comments</span>
                            </span>
                            <span className='text-xl font-bold'>
                                2
                            </span>
                        </div>
                        <div className='ViewBox' onClick={() => { barChange('Views') }}>
                            <span className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Views</span>
                            </span>
                            <span className='text-xl font-bold'>
                                1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <div>
                    <div className="step-list w-[100%] h-auto p-6">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: false,
                            }}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper h-auto "
                        >
                            <SwiperSlide>
                                <div className='m-0 p-0'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://wordpress.com/calypso/images/google-analytics-logo-2ad4c3136c2612f115a7.svg" alt="" className='w-10 h-10' />
                                            <h1 className='h3'>Promote your content with Blaze
                                            </h1>
                                        </div>
                                        <div className='flex justify-around items-center'>
                                            <p className='ml-[-10%]'>Grow your audience by promoting your content. Reach millions of users across Tumblr and WordPress.com
                                            </p>
                                            <button className='btn btn-success btn-sm'>get it now</button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='m-0 p-0'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://wordpress.com/calypso/images/google-analytics-logo-2ad4c3136c2612f115a7.svg" alt="" className='w-10 h-10' />
                                            <h1 className='h3'>Increase your site visitors with Yoast SEO Premium
                                            </h1>
                                        </div>
                                        <div className='flex justify-around items-center'>
                                            <p className='ml-[-15%]'>Purchase Yoast SEO Premium to ensure that more people find your incredible content.
                                            </p>
                                            <button className='btn btn-success btn-sm'>get it now</button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='m-0 p-0'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://wordpress.com/calypso/images/google-analytics-logo-2ad4c3136c2612f115a7.svg" alt="" className='w-10 h-10' />
                                            <h1 className='h3'>The Website.cmsWeb.com free photo library
                                            </h1>
                                        </div>
                                        <div className='flex justify-around items-center '>
                                            <p className='ml-[-10%]'>Our free photo library integrates your site with over 40,000 beautiful copyright-free photos to create stunning designs.
                                            </p>
                                            <button className='btn btn-success btn-sm'>get it now</button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-[100%]'>
                <div className='w-full flex justify-center items-center gap-20'>
                    <div className='border w-[60%]'>
                        <h1 className='h3'>Post & Pages</h1>
                        <div className='mt-5 inline-block w-auto'>
                            <DynamicLink props={pages} />
                        </div>
                        <Link to={'/'} className='btn-outline no-underline w-full my-5 flex justify-center hover:bg-[rgb(247,247,247)] hover:text-black' >show details</Link>
                    </div>
                    <div>
                        <div className='step-list p-10 flex flex-col items-start justify-center'>
                            <h1 className='h3'>Refferers</h1>
                            <p>
                                We'll show you which websites are referring visitors to your site.

                            </p>
                            <Link to={"/"}>
                                <button>
                                    show details
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <GeoChart />
                </div>
            </div>
            <div className='w-full my-10 '>
                <div className='gap-x-16 gap-y-5 id23'>
                    <div className={`border w-full id123 ${showVideo?"":"hidden"}`}>
                        <h1 className='h3 text-left'>Authors</h1>
                        <p>Traffic that authors have generated will show here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                    <div className='border w-full id123'>
                        <h1 className='h3 text-left'>Search terms</h1>
                        <p>See terms that visitors search to find your site, here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                    <div className='border w-full id123'>
                        <h1 className='h3 text-left'>Clicks</h1>
                        <p>Your most clicked external links will display here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                    <div className={`border w-full id123 col-span-2 ${showVideo?"":"hidden"}`}>
                        <h1 className={`h3 text-left `}>Videos</h1>
                        <p>Your most viewed video stats will show up here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                    <div className='border w-full id123 col-span-1'>
                        <h1 className='h3 text-left'>Emails</h1>
                        <p>Stats from your emails will display here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                    <div className='border w-full id123 col-span-1'>
                        <h1 className='h3 text-left'>File Downloads</h1>
                        <p>Stats from any downloaded files will display here.</p>
                        <button><Link to={"/"}>View Details</Link> </button>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='border p-10'>
                    <div><img src="/logo.svg" alt="none" className='w-[100px]' /></div>
                    <div className='flex justify-between items-center'>
                        <h1 className='h2'>Bring your stats with you using the Jetpack mobile app</h1>
                        <img src="/frame.png" alt="none" className='w-[124px]' />
                    </div>
                    <div>
                        <p>Visit <a href="https://imons-world.web.app/" target='blank'>here</a> or scan the QR code to download the Jetpack mobile app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Traffic;