import '../styles/main.css';
import earth from '../assets/earth.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { certificatesList, mobileLinks } from '../const/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Certificate = () => {
    const [currentCertificateIndex, setcurrentCertificateIndex] = useState(0);
    const [currentMobileLinkIndex, setCurrentMobileLinkIndex] = useState(3);
    const [windowMobileWidth, setWindowMobileWidth] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 640) {
            setWindowMobileWidth(true);
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

    const nextCertificate = () => {
        setcurrentCertificateIndex((prevIndex) => (prevIndex + 1) % Object.keys(certificatesList).length);
    };

    const prevCertificate = () => {
        setcurrentCertificateIndex((prevIndex) => (prevIndex - 1 + Object.keys(certificatesList).length) % Object.keys(certificatesList).length);
    }

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
                <div className='columns-1 max-sm:text-5xl md:text-6xl text-white font-bold text-center mt-10'>
                    <m.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    >
                        Certificate Space
                    </m.h1>
                </div>
                <div className='columns-1' />
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
                        className="p-8 rounded-md shadow-md max-sm:mt-10 md:backdrop-blur-md md:bg-opacity-10 md:bg-black"
                        whileTap={{ scale: 0.9 }}
                        onClick={windowMobileWidth ? () => {} : nextCertificate}
                    >
                        <div className='md:text-4xl max-sm:text-3xl font-bold'>
                            {certificatesList[currentCertificateIndex].title}
                        </div>
                        <div className='md:text-2xl max-sm:text-1xl max-sm:font-bold'>
                            Issued {certificatesList[currentCertificateIndex].date} by {certificatesList[currentCertificateIndex].organization}
                        </div>
                        <div className='text-sm'>
                            {certificatesList[currentCertificateIndex].desc}
                        </div>
                        <>
                            <img src={certificatesList[currentCertificateIndex].img} alt={certificatesList[currentCertificateIndex].title} className='hidden md:block w-2/4 mx-auto my-5 certificate cursor-pointer' onClick={(e) => {window.open(certificatesList[currentCertificateIndex].imgUrl, '_blank'); e.stopPropagation(); }} />
                            <br className='hidden max-sm:block' />
                            <Link to={certificatesList[currentCertificateIndex].imgUrl} className='text-1xl max-sm:font-bold' style={{ color: 'white' }}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Click to view certificate
                            </Link>
                        </>
                        <div className="text-2xl mt-4 hidden max-sm:block">
                            <div className="flex justify-center mt-6">
                                { currentCertificateIndex !== 0 && (
                                    <div className="text-sm cursor-pointer" onClick={prevCertificate}>
                                        Prev
                                    </div>
                                )}
                                <div className="text-sm mx-4">{ currentCertificateIndex + 1 }/{ Object.keys(certificatesList).length }</div>
                                { currentCertificateIndex !== Object.keys(certificatesList).length - 1 && (
                                    <div className="text-sm cursor-pointer" onClick={nextCertificate}>
                                        Next
                                    </div>
                                )}
                            </div>
                        </div>
                    </m.div>
                </m.div>
            </m.div>
        </m.div>
    );
};

export default Certificate;
