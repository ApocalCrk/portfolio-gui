import '../styles/main.css';
import earth from '../assets/earth.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { skillsList, mobileLinks } from '../const/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [currentMobileLinkIndex, setCurrentMobileLinkIndex] = useState(4);

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

    const prevCategory = () => {
        setCategoryIndex((prevIndex) => (prevIndex - 1 + Object.keys(skillsList).length) % Object.keys(skillsList).length);
    }

    const nextCategory = () => {
        setCategoryIndex((prevIndex) => (prevIndex + 1) % Object.keys(skillsList).length);
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const currentCategory = Object.keys(skillsList)[categoryIndex];
    const currentSkills = skillsList[currentCategory];

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
                    <Link to="/projects">
                        <div className='text-6xl mt-10 vertical-text-left'>
                            Projects Space
                        </div>
                    </Link>
                </div>
                <div />
            </div>

            <div className="absolute top-0 left-0 w-screen text-white flex flex-row px-5 justify-between items-center">
                <div className='columns-1' />
                <div className='columns-1 md:text-6xl max-sm:text-5xl text-white font-bold text-center mt-10'>
                    <m.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    >
                        Skills Space
                    </m.h1>
                </div>
                <div className='columns-1' />
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
                    alt="earth" 
                    className="hidden md:block mb-0 mx-auto"
                    style={{ width: "70%", height: "70%" }}
                    id="earth"
                />
                <m.div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-screen md:w-2/4'>
                    <m.div
                        variants={categoryVariants}
                        initial="hidden"
                        animate="visible"
                        className="p-8 rounded-md shadow-md grid grid-cols-3 gap-4 md:backdrop-blur-md md:bg-opacity-10 md:bg-black"
                        whileTap={{ scale: 0.9 }}
                        onClick={nextCategory}
                    >
                        <h2 className="text-3xl font-bold col-span-3 mb-4">{currentCategory}</h2>
                        {currentSkills.map((skill, index) => (
                            <div key={index} className="text-lg items-center justify-center flex flex-col">
                                <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:mr-2" />
                                <p className="font-bold max-sm:hidden">{skill.name} - {skill.level}</p>
                                <p className="font-bold hidden max-sm:block">{skill.name}</p>
                            </div>
                        ))}
                        <m.div className="text-2xl mt-4 col-span-3 hidden md:block">
                            Click to see more skills
                            <br />
                            <span className="text-lg">({categoryIndex + 1}/{Object.keys(skillsList).length})</span>
                        </m.div>
                    </m.div>
                    <div className="text-3xl mt-4 hidden max-sm:block">
                        <div className="flex justify-center mt-6">
                            { categoryIndex !== 0 && (
                                <div className="text-sm cursor-pointer" onClick={prevCategory}>
                                    Prev
                                </div>
                            )}
                            <div className="text-sm mx-4">{ categoryIndex + 1 }/{ Object.keys(skillsList).length }</div>
                            { categoryIndex !== Object.keys(skillsList).length - 1 && (
                                <div className="text-sm cursor-pointer" onClick={nextCategory}>
                                    Next
                                </div>
                            )}
                        </div>
                    </div>
                </m.div>
            </m.div>
        </m.div>
    );
};

export default Skills;
