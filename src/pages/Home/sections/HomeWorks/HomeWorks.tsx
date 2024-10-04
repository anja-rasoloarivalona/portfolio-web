import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import { HomeWorksDesktop } from './HomeWorksDesktop';
import { HomeWorksMobile } from './HomeWorksMobile';

const HomeWorks = () => {
    const windowSize = useWindowSize();
    return windowSize.width > 1200 ? <HomeWorksDesktop /> : <HomeWorksMobile />;
};

export default HomeWorks;
