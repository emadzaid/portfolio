import { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';
import {  FaRegMoon, FaRegLightbulb} from 'react-icons/fa';


const NavbarV2 = ({about, proj, contact}) => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return ( 

        <div className="navbar bg-primary_grey dark:bg-secondary_black rounded-full">
            
            <div className="navbar-start">
                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" menu-sm dropdown-content bg-primary_grey dark:bg-secondary_black text-black dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li onClick={() => proj.current.scrollIntoView({behavior: "smooth"})} className='active:text-primary_blue py-2'><a>Projects</a></li>
                        <li onClick={() => about.current.scrollIntoView({behavior: "smooth"})} className=' active:text-primary_blue py-2'><a>About</a></li>
                        <li onClick={() => contact.current.scrollIntoView({behavior: "smooth"})} className='active:text-primary_blue py-2'><a>Contact</a></li>
                    </ul>

                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>

            <div className="navbar-center max-sm:hidden lg:flex">
                <ul className="menu-horizontal px-1 text-black dark:text-white text-sm">
                    <li onClick={() => proj.current.scrollIntoView({behavior: "smooth"})} className='hover:text-primary_blue mr-8 cursor-pointer'> <a>  Projects </a> </li>
                    <li onClick={() => about.current.scrollIntoView({behavior: "smooth"})} className='hover:text-primary_blue mr-8 cursor-pointer'> <a>  About    </a> </li>
                    <li onClick={() => contact.current.scrollIntoView({behavior: "smooth"})} className='hover:text-primary_blue cursor-pointer'> <a>  Contact  </a> </li>
                </ul>
            </div>

            <div className="navbar-end mr-4">
                <button onClick={toggleDarkMode} className="dark:text-primary_white text-xl border-2 border-primary_blue p-1 rounded-full"> {darkMode ? <FaRegMoon /> : <FaRegLightbulb />} </button>
            </div>

        </div>
     );
}
 
export default NavbarV2;