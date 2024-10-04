import React, { useEffect, useRef } from 'react';
import { PageSection, Title } from '../../../../components';
import TagCloud from 'TagCloud';
import { TagCloudContainer } from './HomeSkills-styles';
import ReactDOMServer from 'react-dom/server';
import { skills, renderIcon } from './HomeSkills-config';
import { Routes } from '../../../../routes';
import { useWindowSize } from 'usehooks-ts';
import { Breakpoints } from '../../../../theme';
import { useTranslation } from 'react-i18next';

const HomeSkills = () => {
    const { t } = useTranslation();
    const tagCloudRef = useRef<HTMLDivElement | null>(null);
    const windowSize = useWindowSize();

    /**
     * Get tag cloud width according to window width
     * @param windowWidth
     * @return {number}
     */
    const getTagCloudWidth = (windowWidth: number): number => {
        if (windowWidth <= Breakpoints.MOBILE) {
            return 150;
        }

        if (windowWidth <= Breakpoints.TABLET) {
            return 200;
        }

        return 270;
    };

    useEffect(() => {
        const container = tagCloudRef.current;

        if (!container) return;

        // Clear previous TagCloud content before re-initializing
        container.innerHTML = ''; // Clears the previous tag cloud

        // Define your texts
        const texts = skills.map((skill) => skill.text);

        // Initialize TagCloud
        TagCloud(container, texts, {
            radius: getTagCloudWidth(windowSize.width),
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
            useHTML: true,
        });

        // After the cloud is rendered, insert the icons manually
        const tagCloudElements = document.querySelectorAll('.tagcloud span');
        tagCloudElements.forEach((el) => {
            const icon = renderIcon((el as any).innerText);
            const iconElement = document.createElement('span');
            iconElement.innerHTML = ReactDOMServer.renderToString(icon);
            el.prepend(iconElement);
        });

        // Cleanup function to remove the tag cloud before re-rendering
        return () => {
            container.innerHTML = ''; // Clears the tag cloud on cleanup
        };
    }, [windowSize.width]);

    return (
        <PageSection id={Routes.SKILLS}>
            <Title isCentered>{t('home.skills.title')}</Title>
            <TagCloudContainer>
                <span className="tagcloud" ref={tagCloudRef}></span>
            </TagCloudContainer>
        </PageSection>
    );
};

export default HomeSkills;
