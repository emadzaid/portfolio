import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';
import {  FaRegMoon, FaRegLightbulb} from 'react-icons/fa';


const Navbar = ({about, proj}) => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (

        <div className="flex items-center justify-center">   
            <nav className="uppercase sticky mx-auto bg-white dark:bg-secondary_black py-2 border rounded-3xl text-xs shadow-md">

                <ul className="text-primary_black dark:text-primary_white flex flex-row gap-x-6 px-4">
                    <li onClick={() => proj.current.scrollIntoView({behavior: "smooth"})} className="hover:text-primary_blue transition cursor-pointer">  Projects </li> 
                    <li onClick={() => about.current.scrollIntoView({behavior: "smooth"})} className="hover:text-primary_blue transition cursor-pointer">  About </li> 
                    <li className="hover:text-primary_blue transition cursor-pointer"> Contact </li> 
                </ul>

            </nav>

            <button onClick={toggleDarkMode} className="dark:text-primary_white text-xl border-2 border-primary_blue p-1 rounded-full"> {darkMode ? <FaRegMoon /> : <FaRegLightbulb />} </button>

        </div>
     );
}
 
export default Navbar;
