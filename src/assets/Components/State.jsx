import { Outlet } from "react-router-dom";
import ActiveLinkUnderLine from "../../ActiveLinkUnderline";

const State = () => {
    return (
        <div className="py-5 px-10">
            <div className="title" >
                <h1 className="h3" tooltips="jetpack is not our real app">jetpack stats</h1>
                <p>
                Learn more about the activity and behavior of your site's visitors. <span className="btn-link no-underline">learn more..</span>
                </p>
            </div>
            <div className="stats-navbar mt-5">
                <div className="statNavbar">
                    <div className="mr-[30%] ml-1 flex gap-3 p-0 m-0">
                    <ActiveLinkUnderLine to={`traffic`}>Traffic</ActiveLinkUnderLine>
                    <ActiveLinkUnderLine to={`insights`}>Insights</ActiveLinkUnderLine>
                    <ActiveLinkUnderLine to={`subscribers`}>Subscribers</ActiveLinkUnderLine>
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default State;