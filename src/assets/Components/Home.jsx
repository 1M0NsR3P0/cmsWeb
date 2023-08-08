import { useState } from "react";

const Home = () => {
    const [show, setShow] = useState(false)
    const ShowHandle = () => {
        setShow(!show)
    }
    const hideHandle = () => {
        setShow(!show)
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
                    <div className="step-list">
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
                    <div className="sitePreview-conatiner">
                        <div>
                            <div className="">
                                <div className="bg-red-500 w-[300px] h-[250px] flex relative" onMouseEnter={ShowHandle} onMouseLeave={hideHandle}>
                                    <img className="object-center " src="1.png" alt="" />
                                        <div className={`absolute top-[0%] w-[300px] bg-white h-[250px] left-[0%] ${show ? 'block opacity-30' : 'hidden'}`}></div>
                                    <div className={`absolute top-[40%] left-[40%] ${show ? 'block' : 'hidden'}`}>
                                        <button className="btn btn-error">Edit Site</button>
                                    </div>
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