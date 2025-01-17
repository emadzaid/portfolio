import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {
    return (
        <div className="py-6 sm:py-8 lg:py-12">

            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
 
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:flex max-md:flex-col md:gap-6 xl:gap-8">

                    <div className='group shadow-lg rounded-lg relative h-48 md:h-80 bg-primary_grey dark:bg-secondary_black flex justify-center items-center'>
                        <LazyLoadImage src="/assets/me.jpg" effect='blur' className="group-hover:grayscale-0 rounded-full size-40 max-md:size-32 grayscale object-cover" />
                    </div>
            

                    <div className="max-md:gap-6 p-6 text-xl max-[960px]:text-[15px] h-48 max-md:h-auto overflow-hidden rounded-lg bg-primary_grey dark:bg-secondary_black shadow-lg col-span-2 md:h-80 text-secondary_black dark:text-white/50">
                        <h3 className='mb-8'>I am Emad.</h3>
                        <p className='text-justify'> 
                            I am a full-stack developer with a Bachelor's in Computer Science from The University of Lahore. I excel in creating dynamic, responsive web applications, handling both frontend and backend tasks. Passionate about problem-solving, I’m dedicated to delivering high-quality solutions and continuously enhancing my skills.
                        </p>

                    </div>


                    <div className="text-center flex items-center overflow-hidden relative h-80 rounded-lg bg-primary_grey dark:bg-secondary_black shadow-lg max-md:h-72 col-span-3 group">
                   
                        <span className='absolute top-4 left-1/2 -translate-x-1/2 text-xl mb-4 dark:text-white/50'>My Skills</span>

                        <div

                            x-data="{}"
                            x-init="$nextTick(() => {
                                let ul = $refs.logos;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })"
                        
                            className='w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] '>

                            <ul x-ref="logos" className='flex gap-8 items-center justify-center flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infiniteScroll group-hover:paused '>
                            
                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/html.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/dotnet.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/cpp.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/js.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/react.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/node.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/mongodb.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/express.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/sql.svg'}  />
                                </li>

                                <li>
                                    <img loading='lazy' className='size-16' src={'/assets/skills/bootstrap.svg'}  />
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;
