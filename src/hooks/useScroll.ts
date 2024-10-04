import { useState, useEffect } from 'react';

// Define a type for the scroll direction
export type ScrollDirection = 'up' | 'down';

// Define a return type for the hook
export type ScrollPosition = {
    scrollY: number;
    scrollDirection: ScrollDirection;
};

export const useScroll = (): ScrollPosition => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update scroll position
            setScrollY(currentScrollY);

            // Determine scroll direction
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            // Update last scroll position
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollY, scrollDirection };
};
