import { NavLink } from 'react-router-dom';
import './App.css'
const ActiveLinkUnderLine = ({children,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "ActiveUnderline" : ""
            }>
            {children}
        </NavLink>
    );
};

export default ActiveLinkUnderLine;