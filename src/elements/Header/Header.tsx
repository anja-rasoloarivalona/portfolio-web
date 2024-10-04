import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

const Header = () => {
    const windowSize = useWindowSize();

    return windowSize.width > 930 ? <HeaderDesktop /> : <HeaderMobile />;
};

export default Header;
