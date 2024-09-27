// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Gallery from "../components/Gallery";
import SkillCard from "../components/SkillCard";
import ProjectShowcaseCard from "../components/ProjectShowcaseCard";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import NavbarV2 from "../components/NavbarV2";
// data

import projectsData from "../projectsData";

// utilities 

import { FaGithub, FaLinkedin, FaInstagram, FaDatabase, FaKeyboard ,FaServer, FaTv ,FaCode} from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom"; 
import ThemeContext from "../utils/ThemeContext";
import ScrollToTop from "../utils/ScrollToTop";
import {Fade} from "react-awesome-reveal";


// hooks
import { useRef, useContext, useEffect, useState} from "react";

const HomeScreen = () => {

    const aboutRef = useRef(null)
    const projRef = useRef(null)
    const contactRef = useRef(null)

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    const [errState, setErrState] = useState(false)

    const sendMail = () => {

        let subj = document.getElementById('subject').value;
        let body = document.getElementById('message').value;

        if(subj !== '' && body !== "") {
            window.open(`mailto:emadzaid98@gmail.com?subject=${subj}&body=${body}`);
            setErrState(false)

        }
        else {
            setErrState(true)
        }

        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''
        
      }

    useEffect(() => {

        const emailBtn = document.getElementById("emailBtn");
        emailBtn.addEventListener("click", function() {
            let btnText = emailBtn.value;
          
            navigator.clipboard.writeText(btnText)
              .then(function() {
                emailBtn.textContent = "Copied!";
                setTimeout(() => {
                    emailBtn.textContent = "emadzaid89@gmail.com";
                }, 2000)
              })

          });

        }, []);
    
    return (

        <div className={`${darkMode && "dark"}`}> 

            <div className={"px-14 max-sm:px-1 bg-primary_grey dark:bg-black"}> 

                <div className="bg-primary_white dark:bg-primary_black text-primary_black">

                {/* ------------------------  Header Start     ----------------------------------------------------------------------------  */}

                    <section className="px-24 max-lg:px-12 max-md:px-4 py-10 relative" id="header">
                        
                        {/* <Navbar about={aboutRef} proj={projRef}  /> */}
                        <NavbarV2 about={aboutRef} proj={projRef} contact={contactRef} />

                    <Fade triggerOnce={true}>
                        <header className="mt-14 p-8 max-[500px]:p-4 dark:text-primary_white sticky border-b dark:border-secondary_black">
                            
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="flex max-sm:flex-col items-center gap-3 mb-4">
                                        <img loading="lazy" className="size-24 border border-primary_blue p-2 rounded-full object-cover" src="/assets/me.jpeg" />
                                        <span className="block font-bold text-md text-primary_blue uppercase">Full Stack Developer</span>
                                    </div>

                                    <h1 className="text-4xl font-semibold mb-3 max-md:text-2xl overflow-hidden whitespace-nowrap animate-typing">Hello, I'm Emad Zaid</h1>
                                    <p className="w-9/12 mb-4 max-lg:w-full max-sm:text-sm"> I am a highly motivated full-stack developer with a strong background in building dynamic and responsive web applications using modern technologies.</p>
                                    
                                    <div className="flex max-[500px]:flex-col items-center gap-4">
                                        <Button text={"Download CV"} path={"/assets/Fullstack_CV.pdf"}> </Button>
                                        <button id="emailBtn" value={"emadzaid98@gmail.com"} className="w-60 py-2 rounded text-white bg-secondary_black text-sm cursor-pointer hover:opacity-50 transition">emadzaid98@gmail.com</button>
                                    </div>
                                   

                                    <div className="flex flex-row gap-4 mt-6 text-2xl items-center">
                                        <a href="https://github.com/emadzaid/Musify.github.io" className="p-1 hover:text-primary_blue transition"> <FaGithub /> </a>
                                        <a href="https://www.linkedin.com/in/emad-zaid-1653871ba/" className="p-1 hover:text-primary_blue transition"> <FaLinkedin /> </a>
                                        <a href="https://www.instagram.com/emad_man98?igsh=dmQyYjF6eDM3eWJx" className="p-1 hover:text-primary_blue transition"> <FaInstagram /> </a>
                                    </div>
                              

                                {/* <LazyLoadImage effect="blur" className="h-96 w-96 border rotate-6 -translate-y-3 rounded shadow-lg hover:animate-pulse p-2 max-lg:hidden" src="./public/assets/hero.jpg" /> */}

                            </div>

                        </header>

                    </Fade>
        
                        {/* <div className="h-[2px] w-1/2 bg-primary_grey m-auto"></div> */}

                    </section>

                    {/* ------------------------  Header End     ----------------------------------------------------------------------------  */}

                    {/* ------------------------  About Start     ----------------------------------------------------------------------------  */}


                    {/* ------------------------  About End     ----------------------------------------------------------------------------  */}



                    {/* ------------------------  Services Start     ----------------------------------------------------------------------------  */}


                    <section className="px-24 max-lg:px-12 max-sm:px-6 max-[430px]:px-2 py-8 mb-12 max-[460px]:mb-8" id="services">


                    <Fade direction="down" triggerOnce={true} duration={1000} fraction={0.3}> <center><h2 className="text-3xl max-sm:text-lg mb-8 font-light border-b-4 border-primary_blue inline-block text-primary_blue"> What I do  </h2> </center> </Fade>

                        <Fade direction="left" triggerOnce={true} duration={1000} fraction={0.3}>

                        <div className="grid grid-cols-2 max-md:grid-cols-1 item place-items-center text-primary_black dark:text-primary_white mb-8">
                            
                            <div className="group max-md:border-b px-4 max-[500px]:py-4 py-8 mb-2 hover:bg-primary_grey dark:hover:bg-secondary_black">

                                <div className="flex justify-between ">
                                    <span className="text-4xl max-md:text-3xl inline-block mb-4 font-light block ">01</span>
                                    <FaCode className="group-hover:text-primary_blue text-2xl" />
                                </div>

                                <h3 className="text-xl max-md:text-[16px] mb-2 group-hover:text-primary_blue transition"> Frontend Development</h3>
                                <p> Crafting visually appealing and user-friendly interfaces using the latest web technologies to ensure a seamless user experience across all devices. </p>
                            </div>

                            <div className="group px-4 py-8 max-[500px]:py-4 mb-2 hover:bg-primary_grey max-md:border-b dark:hover:bg-secondary_black">
                                
                                <div className="flex justify-between">
                                    <span className="text-4xl max-md:text-3xl inline-block mb-4 font-light inline-block">02</span>
                                    <FaTv className=" group-hover:text-primary_blue text-2xl" />
                                </div>

                                <h3 className="group-hover:text-primary_blue text-xl max-md:text-[16px] mb-2 hover:text-primary_blue transition inline-block">Backend Development</h3>
                                <p> Building robust and scalable server-side applications, managing databases, and implementing APIs to support front-end functionality. </p>
                            </div>

                            <div className="group px-4 py-8 max-[500px]:py-4 max-[500px]:mb-2 max-md:border-b hover:bg-primary_grey dark:hover:bg-secondary_black">

                                <div className="flex justify-between">
                                    <span className="text-4xl max-md:text-3xl inline-block mb-4 font-light">03</span>
                                    <FaDatabase className="group-hover:text-primary_blue text-2xl" />
                                </div>

                                <h3 className="group-hover:text-primary_blue text-xl max-md:text-[16px] mb-2 hover:text-primary_blue transition inline-block">Responsive Pages</h3>
                                <p> Designing and developing web pages that automatically adjust and perform optimally on various screen sizes and devices, providing a consistent user experience. </p>
                            </div>

                            <div className="group px-4 py-8 max-[500px]:py-4 max-[500px]:mb-2 hover:bg-primary_grey dark:hover:bg-secondary_black">

                                <div className="flex justify-between">
                                    <span className="text-4xl max-md:text-3xl inline-block mb-4 font-light">04</span>
                                    <FaKeyboard className="group-hover:text-primary_blue text-2xl" />
                                </div>

                                <h3  className="group-hover:text-primary_blue text-xl max-md:text-[16px] mb-2 hover:text-primary_blue transition inline-block"> Bug Fixing</h3>
                                <p> Identifying, diagnosing, and resolving issues in code to ensure the smooth operation and reliability of web applications, enhancing overall performance. </p>
                            </div>
                        
                        </div>

                        </Fade>


                        <div className="h-[2px] w-1/2 bg-primary_grey dark:bg-secondary_black m-auto"></div>

                    </section>



                    {/* ------------------------  Services End     ----------------------------------------------------------------------------  */}


                    {/* ------------------------  Featured Projects showcase   ----------------------------------------------------------------------------  */}

                    <section className="px-12 max-[460px]:px-4 pb-8" id="projects" ref={projRef}>

                    <Fade direction="down" triggerOnce={true}> <center><h2 className="text-3xl max-sm:text-lg mb-8 font-light border-b-4 border-primary_blue inline-block text-primary_blue"> Featured Projects  </h2> </center> </Fade>

                    <Fade direction="left" triggerOnce={true}> 
                        <div className="py-6 mt-8 flex flex-col items-center gap-10">
                            {projectsData.slice(0,2).map((proj => {
                                return <ProjectCard key={proj.id} name={proj.name} desc={proj.desc} imgUrl={proj.img} gradient={proj.gradient} url={proj.url} codeUrl={proj.codeUrl} builtWith={proj.builtWith}/>
                            }))}
                        </div>
                        
                        <center className="mb-12">
                            <Link to={'/projects'} className="text-primary_blue underline cursor-pointer" >More Projects</Link>
                        </center>

                        <div className="h-[2px] w-1/2 bg-primary_grey dark:bg-secondary_black m-auto"></div>
                    </Fade>

                    

                    </section>


                    {/* ------------------------  Featured Projects showcase END  ----------------------------------------------------------------------------  */}


                    <section className="py-8" ref={aboutRef}>
                        <Fade direction="left" triggerOnce={true}>

                            {/* <h2 className="text-3xl text-primary_blue max-sm:text-2xl mb-6 inline-block"> About me  </h2> */}
                            <center><h2 className="text-3xl max-sm:text-lg mb-8 font-light border-b-4 border-primary_blue inline-block text-primary_blue"> About Me  </h2> </center>

                            <Gallery />

                            <div className="h-[2px] w-1/2 bg-primary_grey dark:bg-secondary_black m-auto"></div>
                            </Fade>

                    </section>


                    <section ref={contactRef} className="bg-white dark:bg-primary_black pt-8">
                    
                    <Fade direction="left" triggerOnce={true}>

                        {/* <h2 className="ml-12 text-xl max-sm:text-lg font-light border-b-4 border-primary_blue pr-6 inline-block text-primary_blue"> Contact me </h2> */}

                        <center><h2 className="text-3xl max-sm:text-lg mb-8 font-light border-b-4 border-primary_blue inline-block text-primary_blue"> Contact  </h2> </center>

                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

                            {errState? <center><span className="block text-red-500 text-center mb-4">subject or body missing!</span></center> : <span className="block "> </span>}
                            
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your name</label>
                                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary_black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="(optional)"  />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary_black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject of your mail ..."  />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary_black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Please type your query here ..."></textarea>
                                </div>
                                <button onClick={() => sendMail()} type="button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary_black/50 hover:bg-secondary_black/100 sm:w-fit focus:outline-none">Send message</button>
                            </form>
                        </div>

                        </Fade>

                    </section>


                    <ScrollToTop className="text-red-500 size-24" />

                    <Footer about={aboutRef} proj={projRef} contact={contactRef} />

                </div>

            </div>

        </div>
      );
}
 
export default HomeScreen;