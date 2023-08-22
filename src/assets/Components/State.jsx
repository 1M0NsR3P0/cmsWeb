import { Outlet } from "react-router-dom";
import ActiveLinkUnderLine from "../../ActiveLinkUnderline";
import { useState } from "react";
import { useAppContext } from "./Context";
import '../../../src/App.css'

const State = () => {
    const {
        showSetting,
        toggleSetting,
        showAuthor,
        toggleAuthor,
        showVideo,
        toggleVideo,
        showSettingIcon,
        toggleSettingIcon,
        ToggleLinkActive,
    } = useAppContext()

    const settingHandle = () => {
        toggleSetting()
    }
    const videoHandle = () => {
        toggleVideo()

    }
    const authorHandle = () => {
        toggleAuthor()
    }
    const handleSettingIcon = () => {
        toggleSettingIcon()
    }
    const handleActiveLink = ()=>{
        const path = window.location.pathname;
        if(path==="/state/insights" || path === "/state/subscribers"){
            ToggleLinkActive()
        }
    }

    return (
        <div className="py-5 px-10" >
            <div className="title" >
                <h1 className="h3" tooltips="jetpack is not our real app">jetpack stats</h1>
                <p>
                    Learn more about the activity and behavior of your site's visitors. <span className="btn-link no-underline">learn more..</span>
                </p>
            </div>
            <div className="stats-navbar mt-5 ">
                <div className="statNavbar flex justify-between items-center relative">
                    <div className="mr-[30%] ml-1 flex gap-3 p-0 m-0">
                        <ActiveLinkUnderLine to={`traffic`} ><span onClick={() => toggleSettingIcon(true)}>Traffic</span></ActiveLinkUnderLine>
                        <span onClick={handleActiveLink}><ActiveLinkUnderLine to={`insights`} ><span onClick={handleSettingIcon}><span >Insight</span></span></ActiveLinkUnderLine></span>
                        <span onClick={handleActiveLink}>
                        <ActiveLinkUnderLine to={`subscribers`} onClick={handleSettingIcon}>Subscribers</ActiveLinkUnderLine>
                        </span>
                    </div>
                    <div className={`pr-5  ${showSettingIcon ? "block" : "hidden"}`} onClick={settingHandle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </div>
                    <div className={`${showSetting ? 'block absolute top-6 right-6 w-[280px] bg-slate-400 h-[120px] z-20 p-5' : "hidden"}`}>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-evenly" onClick={videoHandle} tooltips="toggle if want to see the video details below">
                                <span>Show Video</span>
                                <span >
                                    <input type="checkbox" className="toggle toggle-primary" checked={showVideo ? true : false} />
                                </span>
                            </div>
                            <div className="flex justify-evenly" onClick={authorHandle} tooltips="toggle if want to see the Authors details below">
                                <span>Show Authors</span>
                                <span>
                                    <input type="checkbox" className="toggle toggle-primary" checked={showAuthor ? true : false} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default State;