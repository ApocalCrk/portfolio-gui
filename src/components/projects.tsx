import '../styles/main.css';
import earth from '../assets/earth.svg';

import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsList, mobileLinks } from "../const/constants";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function chunkArray(array: any[], size: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [showProjectsList, setShowProjectsList] = useState(true);
    const [currentGroup, setCurrentGroup] = useState(0);
    const [currentMobileLinkIndex, setCurrentMobileLinkIndex] = useState(2);

    const projectsToShow = chunkArray(projectsList, 4);
    const totalGroups = projectsToShow.length;

    const handleNextGroup = () => {
        setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
    };

    const toggleProjectsList = () => {
        setShowProjectsList(!showProjectsList);
    };

    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsList.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsList.length) % projectsList.length);
    };

    useEffect(() => {
        if (window.innerWidth < 640) {
            setShowProjectsList(false);
        }
    }, []);

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

    const currentProject = projectsList[currentProjectIndex];

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
                    { currentProjectIndex !== 0 && !showProjectsList && (
                        <div className='text-6xl mt-10 vertical-text-left cursor-pointer' onClick={prevProject}>
                            Previous
                        </div>
                    )}
                    { (currentProjectIndex === 0 || showProjectsList) && (
                        <Link to="/about">
                            <div className='text-6xl mt-10 vertical-text-left'>
                                About Space
                            </div>
                        </Link>
                    )}
                </div>
                <div />
            </div>

            <div className="absolute right-5 animate__animated animate__backInRight animate__delay-fast hidden md:flex" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div />
                <div>
                    { (currentProjectIndex !== projectsList.length - 1 && !showProjectsList) && (
                        <div className='text-6xl mt-10 vertical-text-right cursor-pointer' onClick={nextProject}>
                            Next
                        </div>
                    )}
                    { (showProjectsList) && (
                        <Link to="/certificate">
                            <div className='text-6xl mt-10 vertical-text-right'>
                                Certificate Space
                            </div>
                        </Link>
                    )}
                    { (currentProjectIndex === projectsList.length - 1 && !showProjectsList) && (
                        <div className='text-6xl mt-10 vertical-text-right'>
                            End of Space
                        </div>
                    )}
                </div>
                <div />
            </div>

            <div className="absolute bottom-5 px-3 animate__animated animate__backInUp animate__delay-fast w-full text-white flex flex-col items-center justify-center hidden max-sm:flex">
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

            <div className="absolute top-0 left-0 w-screen text-white flex flex-row px-5 justify-center md:justify-between items-center">
                <div className='columns-1 text-3xl text-white font-bold text-center mt-10 hidden md:block'>
                    <m.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    onClick={toggleProjectsList}
                    className='cursor-pointer'
                    >
                    {showProjectsList ? "Show Project" : "Projects List"}
                    </m.h3>
                </div>
                <div className='columns-1 text-6xl text-white font-bold text-center mt-10 hidden md:block'>
                    <m.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    >
                    {showProjectsList ? "Projects Space" : `Project #${currentProject.id}`}
                    </m.h1>
                </div>
                <div className='columns-1 text-5xl text-white font-bold text-center mt-10 hidden max-sm:block'>
                    <m.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    >
                        Projects Space
                    </m.h1>
                </div>
                <div className='columns-1 text-3xl text-white font-bold text-center mt-10 hidden md:block'>
                    <Link to="/skills">
                        <m.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                        >
                        Skills Space
                        </m.h3>
                    </Link>
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
                
                {showProjectsList && (
                    <m.div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-screen md:w-2/4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <m.div
                            className="p-8 rounded-md shadow-md max-sm:mt-10 md:backdrop-blur-md md:bg-opacity-10 md:bg-black"
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNextGroup}
                        >
                            <div className="text-lg">
                                {projectsToShow[currentGroup].map((project) => (
                                    <div key={project.id} className="my-4">
                                        <p className="text-lg font-bold" onClick={(e) => {
                                            setCurrentProjectIndex(project.id - 1);
                                            toggleProjectsList();
                                            e.stopPropagation();
                                        }}>
                                            {project.title}
                                        </p>
                                        <p className="text-sm">{project.desc}</p>
                                    </div>
                                ))}
                                <div className="flex justify-center mt-6">
                                    { currentGroup !== 0 && (
                                        <div className="text-sm cursor-pointer" onClick={(e) => {
                                            setCurrentGroup((prevGroup) => (prevGroup - 1 + totalGroups) % totalGroups);
                                            e.stopPropagation();
                                        }}>
                                            Prev
                                        </div>
                                    )}
                                    <div className="text-sm mx-4">{ currentGroup + 1 } / { totalGroups }</div>
                                    { currentGroup !== totalGroups - 1 && (
                                        <div className="text-sm cursor-pointer" onClick={(e) => {
                                            setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
                                            e.stopPropagation();
                                        }}>
                                            Next
                                        </div>
                                    )}
                                </div>
                            </div>
                        </m.div>
                    </m.div>
                )}
                { !showProjectsList && (
                    <m.div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-screen md:w-2/4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <m.div
                            className="p-8 rounded-md shadow-md max-sm:mt-10 md:backdrop-blur-md md:bg-opacity-10 md:bg-black"
                            whileTap={{ scale: 0.9 }}
                        >
                            <h2 className="hidden md:block text-2xl font-bold">{currentProject.title}</h2>
                            <h2 className="hidden max-sm:block text-2xl font-bold">{currentProject.title.split("-")[0]}</h2>
                            <p className="mt-4 text-sm md:text-lg">{currentProject.desc}</p>
                            <p className="text-2xl font-bold mt-4 text-sm md:text-lg">Tech Stack</p>
                            <p className="mt-1 text-sm md:text-lg">{currentProject.techStack}</p>
                            <div className="flex items-center justify-center mt-6">
                                <Link to={currentProject.url} target="_blank" rel="noopener noreferrer">
                                    Explore Project
                                </Link>
                                {currentProject.githubUrl && (
                                    <>
                                        <div className="mx-4"></div>
                                        <Link to={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                            GitHub
                                        </Link>
                                    </>
                                )}
                            </div>
                            <div className="text-2xl mt-4 hidden max">
                                <div className="flex justify-center mt-6">
                                    { currentProjectIndex !== 0 && (
                                        <div className="text-sm cursor-pointer" onClick={prevProject}>
                                            Prev
                                        </div>
                                    )}
                                    <div className="text-sm mx-4">{ currentProjectIndex + 1 } / { projectsList.length }</div>
                                    { currentProjectIndex !== projectsList.length - 1 && (
                                        <div className="text-sm cursor-pointer" onClick={nextProject}>
                                            Next
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        </m.div>
                    </m.div>
                )}
            </m.div>
            
        </m.div>
    );
};

export default Projects;
