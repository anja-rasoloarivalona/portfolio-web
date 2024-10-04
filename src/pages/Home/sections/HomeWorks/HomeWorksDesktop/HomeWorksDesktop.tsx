import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ListView, PageSection, Title } from '../../../../../components';
import { BackDrop, Container } from './HomeWorksDesktop-styles';
import { config } from '../../../../../config/main';
import { HomeWorksDesktopItem } from './components';
import { Routes } from '../../../../../routes';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeWorksDesktop = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const isScrollDisabled = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchmove', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
    }, []);

    useEffect(() => {
        const workId = queryString.parse(location.hash.split('?')[1])?.work;
        if (workId != null) {
            const index = [...config.works.values()].findIndex((work) => work.id === workId);
            if (index != null) {
                setActiveIndex(index);
            }
        }
    }, [location.hash]);

    const handleScroll = useCallback(
        (e: Event) => {
            if (isScrollDisabled.current === true) {
                const target = e.target as HTMLElement;
                if (target.classList?.contains('backdrop')) {
                    e.preventDefault();
                    return;
                }
            }
        },
        [isScrollDisabled.current],
    );

    const viewWork = () => {
        // Get the current scroll position and add the element's position
        const elementPosition = containerRef.current!.getBoundingClientRect();
        const offsetPosition = window.pageYOffset + elementPosition.top - 50; // Adjust offset for sticky header
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });

        isScrollDisabled.current = true;
        setIsActive(true);
        hideScrollbar();
    };

    const closeWork = () => {
        const scrollableChild = containerRef.current!.querySelector('.list-view__preview') as HTMLElement;
        if (scrollableChild) {
            scrollableChild.scrollTop = 0; // Scroll to the top
        }

        setIsClosing(true);
        isScrollDisabled.current = false;
        setIsActive(false);
        showScrollbar();
        setTimeout(() => {
            setIsClosing(false);
        }, 300);
    };

    const hideScrollbar = (): void => {
        // Create a new style element
        const style = document.createElement('style');

        // Set the content of the style element to hide the scrollbar
        style.innerHTML = `
          body::-webkit-scrollbar {
            display: none !important;
    
          }
        `;

        // Add an id to easily remove the style later
        style.id = 'hide-scrollbar-style';

        // Append the style element to the head of the document
        document.head.appendChild(style);
    };

    const showScrollbar = (): void => {
        // Find the style element by its id and remove it to show the scrollbar again
        const style = document.getElementById('hide-scrollbar-style');
        if (style) {
            style.remove();
        }
    };

    return (
        <>
            {isActive && <BackDrop className="backdrop" onClick={() => closeWork()} />}
            <PageSection id={Routes.WORKS}>
                <Title>{t('home.works.title')}</Title>
                <Container ref={containerRef} isActive={isActive} isClosing={isClosing}>
                    <ListView
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        labels={[...config.works.values()].map((work) => work.companyName)}
                        height={760}
                    >
                        {[...config.works.values()].map((work, index) => (
                            <HomeWorksDesktopItem
                                work={work}
                                isDisplayed={activeIndex === index}
                                isHidden={activeIndex !== index && isActive === true}
                                isActive={activeIndex === index && isActive === true}
                                viewWork={viewWork}
                                closeWork={closeWork}
                            />
                        ))}
                    </ListView>
                </Container>
            </PageSection>
        </>
    );
};

export default HomeWorksDesktop;
