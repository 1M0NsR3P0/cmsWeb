import ActiveLink from "./ActiveLinkWhite";
import ActiveLinks from "./ActiveLink";

const Nav = () => {
    return (
        <div className="navigation fixed">
            <div className="flex justify-between items-center text-white h-full">
                <div className="Flex mx-[2px]">
                    <ActiveLink to='/'>My Website</ActiveLink>
                    <ActiveLink to={"/newsfeed"}>Readers</ActiveLink>
                </div>
                <div className="Flex mx-[30px]">
                    <ActiveLinks to={"/Write"}>
                        <div className=" btn btn-primary text-black px-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-16">
                                    <path d="M11.5 8.5C10.1501 9.76923 7.64987 12.4487 6 14C5.85001 13.0128 6 10.7663 7.24982 8.80769C7.57814 8.29318 8.14971 7.53846 9.4996 6.69231C10.8495 5.84615 13.9992 5 13.9992 5C13.9993 5.84615 12.8499 7.23077 11.5 8.5Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            Write
                        </div>
                    </ActiveLinks>
                    <ActiveLinks to={"/profile"}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                        </span>
                    </ActiveLinks>
                    <ActiveLinks to={"/help"}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </span>
                    </ActiveLinks>
                    <ActiveLinks to={"/notification"}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>

                        </span>
                    </ActiveLinks>
                </div>
            </div>
        </div>
    );
};

export default Nav;