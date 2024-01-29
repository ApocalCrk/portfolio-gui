import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Explore from '../components/explore.tsx';
import AboutMe from '../components/about_me.tsx';
import Projects from '../components/projects.tsx';
import Skills from '../components/skills.tsx';
import Certificate from '../components/certificate.tsx';
import Experience from '../components/experience.tsx';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Explore />,
    },
    {
      path: '/about',
      element: <AboutMe />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/skills',
      element: <Skills />,
    },
    {
      path: '/certificate',
      element: <Certificate />,
    },
    {
      path: '/experience',
      element: <Experience />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App
