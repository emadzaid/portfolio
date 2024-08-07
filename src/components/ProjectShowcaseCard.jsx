import { FaEye, FaCode } from "react-icons/fa";

const ProjectShowcaseCard = ({imgPath, name, desc, url}) => {
    return (  
        
        <div className="inline-block bg-gray-200 dark:bg-secondary_black border-primary_grey p-4 bg-primary_grey rounded shadow-xl ">
  
            <img className="h-80 w-full" src={imgPath} />
            
            <div className="py-12 flex flex-col items-center gap-4  bg-gray-200 py-4 dark:bg-secondary_black text-center">

                <span className="font-bold block mb-1">{name}</span>
                <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                
                <div className="mt-2">
                    <a href="#" target="_blank" className="text-[12px] font-bold px-4 py-2 bg-secondary_black hover:bg-primary_blue dark:bg-primary_blue dark:hover:bg-primary_black text-white mr-2"> <FaEye className="inline" /> Live Demo </a>
                    <a href="#" target="_blank" className="text-[12px] font-bold px-4 py-2 bg-secondary_black hover:bg-primary_blue dark:bg-primary_blue dark:hover:bg-secondary_black text-white mr-2"> <FaCode className="inline" /> Code </a>
                </div>
            
            </div>
                
        </div>
    );
}
 
export default ProjectShowcaseCard;
