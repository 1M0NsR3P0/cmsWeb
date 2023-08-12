import { NavLink } from 'react-router-dom';
import './App.css'
const ActiveLinkBLue = ({children,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "ActiveBlue" : ""
            }>
            {children}
        </NavLink>
    );
};

export default ActiveLinkBLue;