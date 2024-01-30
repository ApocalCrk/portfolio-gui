import '../styles/main.css';
import earth from '../assets/earth.svg';

import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { mobileLinks } from "../const/constants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
    const [currentMobileLinkIndex, setCurrentMobileLinkIndex] = useState(1);

    const nextMobileLink = () => {
        let nextIndex = (currentMobileLinkIndex + 1) % mobileLinks.length;
        setCurrentMobileLinkIndex((prevIndex) => (prevIndex + 1) % mobileLinks.length);
        window.location.href = mobileLinks[nextIndex].path;
    };

    const prevMobileLink = () => {
        let prevIndex = (currentMobileLinkIndex - 1 + mobileLinks.length) % mobileLinks.length;
        setCurrentMobileLinkIndex((prevIndex) => (prevIndex - 1 + mobileLinks.length) % mobileLinks.length);
        window.location.href = mobileLinks[prevIndex].path;
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };
    return (
        <m.div 
            id="explore" 
            className="bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden bg-black" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ opacity: 0}}
        >
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <div className="absolute left-5 animate__animated animate__backInLeft animate__delay-fast hidden md:flex" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div />
                <div>
                    <Link to="/">
                        <div className='text-6xl mt-10 vertical-text-left'>
                            Home Space
                        </div>
                    </Link>
                </div>
                <div />
            </div>

            <div className="absolute right-5 animate__animated animate__backInRight animate__delay-fast hidden md:flex" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div />
                <div>
                    <Link to="/projects">
                        <div className='text-6xl mt-10 vertical-text-right'>
                            Projects Space
                        </div>
                    </Link>
                </div>
                <div />
            </div>

            <div className="absolute top-0 left-0 w-screen text-white flex flex-row px-5 justify-between items-center">
                <div className='columns-1' />
                <div className='columns-1 text-6xl text-white font-bold text-center mt-10'>
                    <m.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    >
                        About Me
                    </m.h1>
                </div>
                <div className='columns-1' />
            </div>

            <div className="absolute bottom-5 transform -translate-x-1/2 animate__animated animate__backInUp animate__delay-fast hidden md:flex" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <div />
                <div>
                    <Link to="/experience">
                        <div className='text-6xl vertical-text-center'>
                            Experience Space
                        </div>
                    </Link>
                </div>
                <div />
            </div>

            <div className="bottomScreen absolute bottom-5 px-3 animate__animated animate__backInUp animate__delay-fast w-full text-white flex flex-col items-center justify-center hidden max-sm:flex">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} className='animate__animated animate__backInUp animate__slow'>
                    <div 
                        className='text-3xl'
                        onClick={prevMobileLink}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div>
                        <div className='text-3xl'>
                            {mobileLinks[currentMobileLinkIndex].text}
                        </div>
                    </div>
                    <div 
                        className='text-3xl'
                        onClick={nextMobileLink}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            
            <m.div 
                className="flex flex-col items-center justify-center h-screen w-screen text-white"
                initial="hidden"
                animate="visible"
                variants={boxVariants}
            >
                <img
                    src={earth}
                    alt="Earth" 
                    className="hidden md:block mb-0 mx-auto"
                    style={{ width: "70%", height: "70%" }}
                    id="earth"
                />

                <m.div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-screen md:w-2/4`}>
                    <m.div className="p-8 rounded-md shadow-md max-sm:mt-10 md:backdrop-blur-md md:bg-opacity-10 md:bg-black"
                        whileTap={{ scale: 0.9 }}
                    >
                            <p className="text-sm md:text-lg">
                            Hey there! I'm Ferdy Firmansyah, a passionate Computer Science student at the vibrant University Atma Jaya Yogyakarta. My journey involves exploring the exciting realms of <b>Competitive Programming</b>, <b>Web Development</b>, <b>Machine Learning</b>, and <b>Mobile Development</b>. I thrive on challenges and love bringing ideas to life through code. Currently, my tech toolkit includes languages and frameworks like <b>ReactJS</b>, <b>NodeJS</b>, <b>ExpressJS</b>, <b>Django</b>, <b>Tensorflow</b>, <b>Laravel</b>, and <b>Flutter</b>. It's a diverse mix, and I'm always hungry to learn more. Beyond coding, I have a keen interest in <b>UI/UX Design</b>—crafting seamless, user-friendly experiences. The fascinating world of <b>Blockchain</b> technology has also captured my attention. Currently, I'm channeling my skills into a fascinating project called <a href="https://github.com/apocalcrk/siatma-released" className='font-bold' target="_blank" rel="noreferrer">SIATMA</a>. It's a work-in-progress, so stay tuned for the magic unfolding!
                        </p>
                    </m.div>
                </m.div>
            </m.div>
            
        </m.div>
    );
};

export default AboutMe;
