import { NavLink } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';

const ActiveLink = ({children,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "Active" : ""
            }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;