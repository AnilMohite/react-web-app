import Style from '../assets/styles/styles.module.css'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className={Style.header}>
                <div className={Style.logo}>Logo</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
};
  
export default Header;