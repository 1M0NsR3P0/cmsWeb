import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const [show, setShow] = useState(false)
    const [showLinks, setLinkShow] = useState(false)

    const reload = () => {
        window.location.reload();
    };
    const ShowHandle = () => {
        setShow(!show)
    }
    const hideHandle = () => {
        setShow(!show)
    }
    const handleLinks = () => {
        setLinkShow(!showLinks)
    }

    return (
        <div className="home">
            <div className="flex justify-between mb-10 mx-[140px]">
                <div className="">
                    <h1 className="h1">My Home</h1>
                    <p>Your hub for posting, editing, and growing your site.</p>
                </div>
                <a className="btn btn-square w-[100px]" href="https://imons-world.web.app/">
                    <span className="">
                        Visit site
                    </span></a>
            </div>
            <div className="steps">
                <div className="step-container">
                    <div className="w-full flex flex-col gap-4">
                        <div className="step-list">
                            <div>
                                <div className="flex justify-between mx-[10px] my-[20px]">
                                    <div><h1 className="stepTitle">Next steps for your site</h1></div>
                                    <div><span className="circle">0/3</span></div>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <button className="myBtn-ghost border-b-2">Give your site a name</button>
                                    <button className="myBtn-ghost border-b-2">Customize Your Domain</button>
                                    <button className="myBtn-ghost">Drive Traffic To Your Site</button>
                                </div>
                            </div>
                        </div>

                        <div className="step-list p-8">
                            <div>
                                <h1>No stats to display yet. Publish or share a post to get some traffic to your site.
                                </h1>
                            </div>
                            <div className="flex mt-[150px]">
                                <div >
                                    <img src="2.svg" alt="" className="w-[100px]" />
                                </div>
                                <div>
                                    Stats can help you optimize for the right keywords, and feature content your readers are interested in.
                                    <span>
                                        <a className="link btn-link no-underline" href=""> Read more..</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="step-list w-[700px] h-auto">
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
                                className="mySwiper h-[200px] "
                            >
                                <SwiperSlide>
                                    <div className='flex p-10 gap-5'>
                                        <div className=''>
                                            <h1 className='h3'>Design like an expert
                                            </h1>
                                            <p>Master the basics of Site Editing with four short videos. Learn how to edit colors, fonts, layouts, and bring your style to your site.
                                            </p>
                                            <button className='btn btn-link no-underline'>Start Learning</button>
                                        </div>
                                        <div>
                                            <img src="3.svg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex p-10'>
                                        <div className=''>
                                            <h1 className='h3'>Blog like an expert from day one
                                            </h1>
                                            <p>Learn the fundamentals from our bite-sized video course — you'll be up and running in just nine minutes.
                                            </p>
                                            <button className='btn btn-link no-underline'>Start Learning</button>
                                        </div>
                                        <div>
                                            <img src="3.svg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex p-10'>
                                        <div className=''>
                                            <h1 className='h3'>The Website.cmsWeb.com free photo library
                                            </h1>
                                            <p>Our free photo library integrates your site with over 40,000 beautiful copyright-free photos to create stunning designs.
                                            </p>
                                            <button className='btn btn-link no-underline'>Learn More..</button>
                                        </div>
                                        <div>
                                            <img src="4.svg" alt="" />
                                        </div>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='step-list p-8'>
                            <div className='flex gap-2 items-center'>
                                <h1 className='h3'>Get Help
                                </h1>
                                <span className='circle text-xl font-extrabold'>?</span>
                            </div>
                            <div>
                                <input type="search" placeholder='Search Supposrt Articles' className='SearchSupposrtArticles' />
                            </div>
                            <div>
                                <span className='font-bold'>Recommended resources</span>
                                <div>
                                    <div className='flex justify-start mt-comeback hoveringEffect text-[#0675c4] no-underline hover:no-underline items-center gap-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"></path></svg>
                                        </span>
                                        <span>
                                            Quick Step guide
                                        </span>

                                    </div>
                                    <div className='flex justify-start mt-comeback hoveringEffect text-[#0675c4] no-underline hover:no-underline items-center gap-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"></path></svg>
                                        </span>
                                        <span>
                                            All About Domain
                                        </span>

                                    </div>
                                    <div className='flex justify-start mt-comeback hoveringEffect text-[#0675c4] no-underline hover:no-underline items-center gap-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"></path></svg>
                                        </span>
                                        <span>
                                            Managing Purchases
                                        </span>

                                    </div>
                                    <div className='flex justify-start mt-comeback hoveringEffect text-[#0675c4] no-underline hover:no-underline items-center gap-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"></path></svg>
                                        </span>
                                        <span>
                                            Uploading custom plugins and themes
                                        </span>

                                    </div>
                                    <div className='flex justify-start mt-comeback hoveringEffect text-[#0675c4] no-underline hover:no-underline items-center gap-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"></path></svg>
                                        </span>
                                        <span>
                                            Privacy Settings
                                        </span>

                                    </div>
                                    <div className='flex justify-start mt-comeback hoveringEffect contactSupport items-center gap-2'>
                                        <span className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-blue-600 rounded-[50%] text-white mt-1">
                                                <path strokeLinecap="" strokeLinejoin="" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                            </svg>

                                        </span>
                                        <span>
                                            Contct Support
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sitePreview-conatiner">
                    <div>
                        <div className="">
                            <div className="w-[400px] h-[250px] flex relative" onMouseEnter={ShowHandle} onMouseLeave={hideHandle}>
                                <img className="object-center " src="1.png" alt="" />
                                <div className={`absolute top-[0%] w-[400px] bg-white h-[250px] left-[0%] ${show ? 'block opacity-30' : 'hidden'}`}></div>
                                <div className={`absolute top-[40%] left-[30%] ${show ? 'block' : 'hidden'}`}>
                                    <button className=' no-underline  hover:no-underline myBtn-edit ' >
                                        <span className="flex items-center gap-2">
                                            Edit page
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div><h2 className="h3 text-gray-500">website title</h2></div>
                            <div><Link to="/" onClick={reload} className="text-sm flex items-center">https ://www. website.blogspot.dynamic. com
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>

                            </Link></div>
                        </div>
                        <div>
                            <button className={`Flex justify-between w-full py-5 `} onClick={handleLinks}>
                                <span>Qucik Links</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${showLinks && 'rotate-180'}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`${showLinks ? 'hidden' : 'block animateLInks'}`}>
                                <ul className='quickLinks'>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z" /></svg>
                                        </span>
                                        <span>
                                            Edit Site
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" /></svg>
                                        </span>
                                        <span>
                                            Write Blog Post
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" /></svg>
                                        </span>
                                        <span>
                                            Promote With blaze
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" /></svg>
                                        </span>
                                        <span>
                                            Manage Comments
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.826 20.002c-.074-.721-.358-1.391-.826-1.948s-6.114-7.376-7.523-9.178c-.47-.601-.575-1.246-.296-1.817.268-.549.842-.918 1.431-.918.918 0 1.408.655 1.548 1.215.161.641-.035 1.231-.623 1.685l1.329 1.624 6.088-3.472 1.759 2.036c.564-.407 1.193-.73 1.872-.94-.729-.84-1.402-1.615-1.855-2.131 1.362-1.063 1.739-2.957.862-4.452-.617-1.053-1.758-1.706-2.977-1.706-1.187 0-.792-.016-9.565 4.475-1.233.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.426 1.794 7.56 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.409-.655-1.549-1.216-.157-.629.011-1.208.604-1.654l-1.277-1.545c-.823.665-1.278 1.496-1.377 2.442-.233 2.205 1.525 3.993 3.614 3.993.595 0 1.311-.177 1.84-.51l5.257-3.316c-.627-.351-1.188-.805-1.665-1.336l-1.847 1.164zm.194-17.85c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.098 2.888c-.05-1.089-.578-2.081-1.454-2.732l5.248-2.686zm6.48 7.848c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" /></svg>
                                        </span>
                                        <span>
                                            Add A Page
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" /></svg>
                                        </span>
                                        <span>
                                            Add A Domain
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" /></svg>
                                        </span>
                                        <span>
                                            Manage All Domain
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start '>
                                        <span>
                                            <img src="logo.svg" alt="webpress" className='ml-[-8px] w-12 h-12' />
                                        </span>
                                        <span>
                                            WEBBY Admin Dashboard
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 5h-24v19h24v-19zm-13-1h-9v-2.5c0-.829.671-1.5 1.5-1.5h6c.829 0 1.5.671 1.5 1.5v2.5zm11 0h-9v-2.5c0-.829.671-1.5 1.5-1.5h6c.829 0 1.5.671 1.5 1.5v2.5z" /></svg>
                                        </span>
                                        <span>
                                            Explore Plugin
                                        </span>
                                    </li>
                                    <li className='hoveringEffect Flex justify-start'>
                                        <div className='Flex justify-start'>
                                            <div>
                                                <img src="fiverr.png" className='w-6 h-6' alt="" />
                                            </div>
                                            <div>
                                            Create Logo With Fiverr
                                            </div>
                                        </div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                                <div className={`mt-5 ml-[-10px] ${!showLinks&&'animateLInks'}`}>
                                    <div className='mb-3'><img src="/logo.svg" alt="none"  className='w-16'/></div>
                                    <h1 className='text-lg font-semibold'>Get our mobile app</h1>
                                    <p>Everything you need to build and grow your site from any device.</p>
                                    <div className='mt-4'>
                                    <a href="/" className='text-[#008710] font-mono font-bold hover:underline text-lg'>Get the app</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;