import { FaEye, FaCode} from "react-icons/fa";
import {LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProjectCard = ({name, desc, imgUrl, url, gradient}) => {
    return ( 
        <div className="flex max-lg:flex-col items-center ">
            <div className="border dark:border-secondary_black px-8 py-16 max-[460px]:py-6 w-1/2 max-lg:w-full bg-gray-100/50 dark:bg-secondary_black shadow-2xl float-left flex flex-col gap-6 text-center rounded">

                <h2 className="text-primary_black dark:text-primary_white text-2xl"> {name}</h2>
                <span className="text-xs text-gray-800/50 dark:text-gray-400 text-light"> {desc}</span>

                <div className="mb-8 flex flex-wrap gap-4 justify-center">
                    <a href="#" className={`px-4 py-2 bg-gradient-to-r ${gradient} text-xs text-primary_white rounded-full hover:-translate-y-1 inline-block transition`}> <FaEye className="inline" /> Live Demo </a> 
                    <a href="#" className={`px-4 py-2 bg-gradient-to-r ${gradient} text-xs text-primary_white rounded-full hover:-translate-y-1 inline-block transition`}> <FaCode className="inline" /> Code </a> 
                </div>
                <span className="text-gray-800/50 dark:text-gray-400 text-xs">Built with HTML, CSS, Javascript</span>          
            </div>

            <div className={`${gradient} shadow-2xl float-right p-6 max-[460px]:p-2 dark:brightness-75 rounded`}>
                <LazyLoadImage className="h-72 max:w-full w-80 mx-auto rounded sm:hover:scale-y-110 transition" src={imgUrl} />
            </div>


        </div>
    );
}
 
export default ProjectCard;