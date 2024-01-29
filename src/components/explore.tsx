import earth from '../assets/earth1.svg';
import person1 from '../assets/p1.png';
import person4 from '../assets/p4.png';
import '../styles/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mobileLinks, links } from '../const/constants';

const Explore = () => {
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
    const [currentMobileLinkIndex, setCurrentMobileLinkIndex] = useState(0);

    const nextLink = () => {
        setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
    };

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

    return (
        <m.div 
            id="explore" 
            className="bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden bg-black" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
        >
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <div className="absolute top-0 left-0 items-center justify-center h-screen w-screen text-white">
                <div className='text-white font-bold text-center mt-10'>
                    <h1 className='max-sm:text-3xl text-6xl animate__animated animate__backInUp animate__slow'>
                        Hello, I'm Ferdy Firmansyah
                    </h1>
                    <h2 className='animate__animated animate__backInUp animate__slow mt-5 text-1xl md:text-3xl'>
                        Explore my space to know more about me
                    </h2>
                </div>
            </div>

            <div className="absolute bottom-5 px-3 animate__animated animate__backInUp animate__delay-fast w-full text-white flex flex-col items-center justify-center hidden max-sm:flex">
                <div className='flex flex-row justify-center mt-5 animate__animated animate__backInUp animate__slow mb-5'>
                    <div className='text-5xl mx-3'>
                        <a href="https://www.instagram.com/ferdyfrms/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className='text-5xl text-white mx-3'>
                        <a href="https://www.linkedin.com/in/ferdy-firmansyah-126518204/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='text-5xl text-white mx-3'>
                        <a href="https://www.github.com/apocalcrk" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className='text-5xl text-white mx-3'>
                        <a href="https://www.twitter.com/algorithmehuman" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
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

            <div className="absolute left-5 animate__animated animate__backInLeft animate__delay-1s hidden md:flex"  style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div />
                <div>
                    <div className='text-6xl mt-10 icon-container'>
                        <a href="https://www.instagram.com/ferdyfrms/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className='text-6xl text-white mt-10 icon-container'>
                        <a href="https://www.linkedin.com/in/ferdy-firmansyah-126518204/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='text-6xl text-white mt-10 icon-container'>
                        <a href="https://www.github.com/apocalcrk" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className='text-6xl text-white mt-10 icon-container'>
                        <a href="https://www.twitter.com/algorithmehuman" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
                <div />
            </div>
            
            <div className="absolute right-5 bottom-5 animate__animated animate__backInRight animate__delay-1s hidden md:flex" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div />
                <m.div 
                    animate={{ 
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        nextLink();
                    }}
                >
                    <Link to={links[currentLinkIndex].path}>
                        <div className='text-6xl mt-10 vertical-text-right'>
                            {links[currentLinkIndex].text}
                        </div>
                    </Link>
                </m.div>
                <div>
                    <div className="scroll-downs">
                        <div className="mouse">
                            <div className="scroll"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-screen w-screen text-white">
                <m.img
                    src={earth}
                    alt="Earth" 
                    className="hidden md:block w-3/4 mb-0 mx-auto absolute bottom-0 md:mt-20"
                    style={{ top: "50%" }}
                    id="earth"
                    animate={{ 
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}    
                />
                <m.img
                    src={person1}
                    alt="Person"
                    className="hidden md:block mx-auto absolute z-20 md:mt-20"
                    id="person1"
                    animate={{ 
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}    
                />
                <m.img
                    src={person4}
                    alt="Person"
                    className="hidden max-sm:block mx-auto absolute z-20"
                    id="person4"
                    animate={{ 
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </div>
        </m.div>
    );
};

export default Explore;
