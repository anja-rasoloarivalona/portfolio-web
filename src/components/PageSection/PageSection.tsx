import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container } from './PageSection-styles';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

type Props = {
    children: React.ReactNode;
    expandHeight?: boolean;
    expandWidth?: boolean;
    id?: string;
};

const PageSection = ({ children, id, expandHeight = false, expandWidth = false }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { setScrollOnHashChange, watchSectionVisibility, hash } = useContext(AppContext);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state based on whether the element is visible
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 10% of the element is visible
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (
            isVisible === true &&
            watchSectionVisibility === true &&
            id != null &&
            hash != null &&
            id !== hash
        ) {
            setScrollOnHashChange(false);
            navigate(`/${id}`, { replace: true });
        }
    }, [isVisible]);

    return (
        <Container
            id={id ?? ''}
            expandHeight={expandHeight}
            expandWidth={expandWidth}
            ref={ref}
            className="page__section"
        >
            {children}
        </Container>
    );
};

export default PageSection;
