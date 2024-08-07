const Footer = ({about, proj, contact}) => {
    return (
        <footer className="border-t dark:border-secondary_black py-14 px-8">

            <ul className="flex flex-row gap-6 text-primary_black dark:text-primary_white mb-4 text-sm">
                <li  onClick={() => proj.current.scrollIntoView({behavior: "smooth"})} className="hover:text-primary_blue transition">  Projects </li>
                <li  onClick={() => about.current.scrollIntoView({behavior: "smooth"})} className="hover:text-primary_blue transition">  About </li>
                <li  onClick={() => contact.current.scrollIntoView({behavior: "smooth"})} className="hover:text-primary_blue transition">  Contact </li>
            </ul>

            <span className="float-right text-[12px] opacity-30 dark:text-primary_white"> &copy; 2024 Emad Zaid. All rights reserved. </span>

        </footer>
     );
}
 
export default Footer;