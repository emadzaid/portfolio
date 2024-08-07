import { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';
import ProjectShowcaseCard from '../components/ProjectShowcaseCard';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import projectsData from '../projectsData';
import {FaArrowLeft} from 'react-icons/fa';


const ProjectScreen = ({}) => {

    const { darkMode} = useContext(ThemeContext);

    return ( 
        <section className={`${darkMode && "dark"}`}>

            <div className='mx-auto flex flex-col items-center px-20 max-md:px-12 py-8 bg-white dark:bg-primary_black text-black dark:text-white'>
                
                <Link to={'/'} className="self-start text-black dark:text-white dark:hover:text-primary_blue hover:text-primary_blue"> <FaArrowLeft className='text-2xl text-primary_blue hover:brightness-75 inline-block ' /> Back to Home</Link>
                <div className='mt-8 py-8'>
                        
                    <h2 className="text-xl font-bold mb-2 pr-4 py-1 border-b-4 border-primary_blue text-primary_blue inline-block"> Projects </h2>
                    <div className="text-primary_black dark:text-primary_white pt-10 max-sm:w-full flex flex-col gap-12">
                        {projectsData.map((proj => {
                            return <ProjectCard key={proj.id}  name={proj.name} builtWith={proj.builtWith} desc={proj.desc} imgUrl={proj.img} gradient={proj.gradient}/>
                        }))}
                    
                    </div>

                </div>

            </div>

        </section>
    );
}
 
export default ProjectScreen;


// <div className="text-primary_black dark:text-primary_white pt-10 grid grid-cols-2 max-lg:grid-cols-1 maxlg:w-9/12 max-sm:w-full gap-8">
// {projectsData.map((proj => {
//     return <ProjectShowcaseCard key={proj.id} desc={proj.desc} name={proj.name} imgPath={proj.img} url={proj.url} />
// }))}

// </div>