import React from 'react';
import '../../../src/App.css'
import { ActivityCalendar } from 'activity-calendar-react'
import ActiveLinkBLue from '../../ActiveLinkBlue';
import { Link } from 'react-router-dom';

const Insights = () => {
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
    return (
        <div>
            <div className='box-container'>
                <div className='box'>
                    <span className='span'>
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 6h12V4.5H4V6Zm16 4.5H4V9h16v1.5ZM4 15h16v-1.5H4V15Zm0 4.5h16V18H4v1.5Z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>post</p>
                    <p className='h2'>3</p>
                </div>
                <div className='box'>
                    <span className='span'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>words</p>
                    <p className='h2'>2.7k</p>
                </div>
                <div className='box'>
                    <span className='span'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z" clip-rule="evenodd"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>likes</p>
                    <p className='h2'>0</p>
                </div>
                <div className='box'>
                    <span className='span'>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>comments</p>
                    <p className='h2'>0</p>
                </div>
                <div className='box'>
                    <span className='span'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill-rule="evenodd"></path></svg>
                    </span>
                    <p className='font-semibold mt-3'>subscribers</p>
                    <p className='h2'>1</p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-semibold'>All-time highlights</h1>
                <div className='box-container grid-cols-3 gap-5'>
                    <div className='box w-full'>
                        <h1 className='h3'>ALl time stats</h1>
                        <div className='pt-5'>
                            <p className='flex items-center py-2 text-xl font-semibold gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="m4 13 .67.336.003-.005a2.42 2.42 0 0 1 .094-.17c.071-.122.18-.302.329-.52.298-.435.749-1.017 1.359-1.598C7.673 9.883 9.498 8.75 12 8.75s4.326 1.132 5.545 2.293c.61.581 1.061 1.163 1.36 1.599a8.29 8.29 0 0 1 .422.689l.002.005L20 13l.67-.336v-.003l-.003-.005-.008-.015-.028-.052a9.752 9.752 0 0 0-.489-.794 11.6 11.6 0 0 0-1.562-1.838C17.174 8.617 14.998 7.25 12 7.25S6.827 8.618 5.42 9.957c-.702.669-1.22 1.337-1.563 1.839a9.77 9.77 0 0 0-.516.845l-.008.015-.002.005-.001.002v.001L4 13Zm8 3a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path></svg>
                                views
                            </p>
                            <p className='flex items-center py-2 text-xl font-semibold gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill-rule="evenodd"></path></svg>
                                visitors
                            </p>
                            <p className='flex items-center py-2 text-xl font-semibold gap-2'>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 6h12V4.5H4V6Zm16 4.5H4V9h16v1.5ZM4 15h16v-1.5H4V15Zm0 4.5h16V18H4v1.5Z"></path></svg>
                                post
                            </p>
                            <p className='flex items-center py-2 text-xl font-semibold gap-2'>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"></path></svg>
                                comments
                            </p>
                        </div>
                    </div>
                    <div className='box w-full'>
                        <h1 className='h3'>most popular time</h1>
                        <small>Best day</small>
                        <p className='h1'>Friday</p>
                        <small className='text-xs'>92% of views</small>
                        <h1 className='h3'>best hour</h1>
                        <p className='h1'>10 P.M</p>
                        <small className='text-xs'>92% of views</small>
                    </div>
                    <div className='box w-full'>
                        <h1 className='h3'>most popular day</h1>
                        <small>day</small>
                        <p className='h1'>Augoust 11</p>
                        <small className='text-xs'>2023</small>
                        <h1 className='h3'>views</h1>
                        <p className='h1'>11</p>
                        <small className='text-xs'>92% of views</small>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex w-full'>
                    <div className='box w-[80%] py-5 my-5'>
                        <p className='h3 py-2'>Latest post</p>
                        <p className='py-2 text-lg font-semibold'>this is one the post i am gonna create and it will show here! after i connnet it to data base!</p>
                        <small>Published Aug 4, 2023</small>
                        <div className='flex items-center gap-10 mt-10'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold'>views</span>
                                <span className='text-4xl font-semibold'>11</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold'>likes</span>
                                <span className='text-4xl font-semibold'>0</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold'>comments</span>
                                <span className='text-4xl font-semibold'>0</span>
                            </div>
                        </div>
                    </div>
                    <div className='box bg-slate-200 w-[40%]'>
                        <div className='w-full flex justify-center items-center opacity-20 hover:opacity-60'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[80%] h-[80%] ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <ActivityCalendar showColorLegend showWeekdayLabels sampleData={sampleData} colorCustomization={colorCustomization} showMonth={true} />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='h1'>All Time Insight</h1>
                    <div className='box w-full'>
                        <div className='Flex justify-between px-10 py-3'>
                            <h2 className='h3'>Total views</h2>
                            <div className='flex'>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white border-r-2 border-blue-500'>Month and years</div></ActiveLinkBLue>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white'>Average Per Day</div></ActiveLinkBLue>
                            </div>
                        </div>
                        <div className='w-full onlyMonth'>
                            <div>
                                <ActivityCalendar showMonth={true}></ActivityCalendar>
                            </div>
                            <div className=''>
                                total
                            </div>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <Link className='w-[500px] text-center cursor-pointer'><span className='ml-[-140px] hover:bg-slate-100'>2023</span></Link>
                            <Link className='w-[500px] text-center cursor-pointer'><span className='mr-[-150px] hover:bg-slate-100'>1</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box w-full p-10'>
                <div>
                    <h1 className='h3'>Tags and Categories</h1>
                    <p className=''>No tagged posts or pages viewed!</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='box w-full p-5'>
                    <div className=''>
                        <div className='Flex justify-between p-5'>                        <h2 className='h3'>comments</h2>
                            <div className='flex'>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white border-r-2 border-blue-500'>By Authors</div></ActiveLinkBLue>
                                <ActiveLinkBLue><div className='py-2 px-3 text-white'>By Post And Comments</div></ActiveLinkBLue>
                            </div></div>
                        <div className='p-5'>no comments Yet!</div>
                    </div>
                </div>
                <div className='box w-full p-5'>
                    <div>
                        <h1 className='h3'>Number of Share</h1>
                        <p className='py-2'>No Shared Post Yet!</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-center text-green-700'>
                alright reserved @ <a href="https://imons-world.web.app/">Me</a>
            </div>
        </div>
    );
};

export default Insights;