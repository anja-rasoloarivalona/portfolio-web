import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Container } from './App-styles';
import { AppRoutes, Routes } from './routes';
import { Header } from './elements';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContextType } from './types';

export const AppContext = createContext<AppContextType>(null!);

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMounted, setIsMounted] = useState(false);
    const [scrollOnHashChange, setScrollOnHashChange] = useState(false);
    const [watchSectionVisibility, setWatchSectionVisibility] = useState(false);
    const hash = useMemo(() => location.hash.split('?')[0], [location.hash]);

    useEffect(() => {
        // reset scroll
        window.scroll(0, 0);
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // reset hash
        if (hash !== Routes.HOME) {
            navigate(`/${Routes.HOME}`);
        }

        setTimeout(() => {
            setIsMounted(true);
            setWatchSectionVisibility(true);
        }, 800);
    }, []);

    useEffect(() => {
        if (isMounted === true) {
            handleHashChange();
        }
    }, [hash]);

    /**
     * Handle hash change
     */
    const handleHashChange = () => {
        if (scrollOnHashChange === false) {
            return;
        }

        const element = document.getElementById(hash);

        if (element == null) {
            return;
        }

        element.scrollIntoView({ behavior: 'smooth' });
        // Adjust scroll position manually for the offset
        const offset = 50; // Change this value to your desired offset
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get element's position relative to the viewport
        const offsetPosition = elementPosition - offset; // Calculate new position with offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth', // Smooth scroll to the new position
        });
    };

    return (
        <AppContext.Provider
            value={{
                hash,
                scrollOnHashChange,
                setScrollOnHashChange,
                watchSectionVisibility,
                setWatchSectionVisibility,
            }}
        >
            <Container isMounted={isMounted}>
                <Header />
                <AppRoutes />
            </Container>
        </AppContext.Provider>
    );
};

export default App;
