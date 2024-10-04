import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
    Container,
    FloatingList,
    FloatingListItem,
    FloatingListItemLink,
    FloatingListItemText,
    Language,
    LanguageIcon,
    LanguageText,
    Left,
    Nav,
    NavIndicator,
    NavItem,
    NavItemIcon,
    Right,
} from './HeaderDesktop-styles';
import { useTranslation } from 'react-i18next';
import { Routes } from '../../../routes';
import { CiGlobe } from 'react-icons/ci';
import { useLocale, useScroll } from '../../../hooks';
import { Locale } from '../../../types';
import { changeLocale } from '../../../translations';
import { useLocation } from 'react-router-dom';
import { works } from '../../../config/works';
import { BiChevronDown } from 'react-icons/bi';
import { AppContext } from '../../../App';
import { Logo } from '../components';

const HeaderDesktop = () => {
    const { t } = useTranslation();
    const rightRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const locale = useLocale();
    const scroll = useScroll();
    const [isMounted, setIsMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndicator, setActiveIndicator] = useState({ width: 0, offset: 0 });
    const [openedMenu, setOpenedMenu] = useState<null | 'language' | 'works'>(null);
    const [mouseY, setMouseY] = useState(0);
    const { hash, setScrollOnHashChange, setWatchSectionVisibility } = useContext(AppContext);

    const list = useMemo(() => {
        return [
            {
                id: 'home',
                text: t('navigation.home'),
                path: Routes.HOME,
            },
            {
                id: 'works',
                text: t('navigation.works'),
                path: Routes.WORKS,
                subList: [...works.values()].map((work) => ({
                    text: work.companyName,
                    path: `${Routes.WORKS}?work=${work.id}`,
                })),
            },
            {
                id: 'skills',
                text: t('navigation.skills'),
                path: Routes.SKILLS,
            },
            {
                id: 'about',
                text: t('navigation.about'),
                path: Routes.ABOUT,
            },
            {
                id: 'contact',
                text: t('navigation.contact'),
                path: Routes.CONTACT,
            },
        ];
    }, [locale]);

    useEffect(() => {
        const index = list.findIndex((item) => pathname.includes(item.path));
        setTimeout(() => {
            onChangeActiveIndicator(Math.max(index, 0));
            setIsMounted(true);
        });

        const handleMouseMove = (event: MouseEvent) => {
            setMouseY(event.clientY); // Get the Y position of the mouse
        };

        // Attach the mousemove event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (isMounted === true) {
            onChangeActiveIndicator(activeIndex);
        }
    }, [list]);

    useEffect(() => {
        if (isMounted === true) {
            const index = list.findIndex((item) => hash.includes(item.path));
            if (index > -1 && index !== activeIndex) {
                onChangeActiveIndicator(index);
            }
        }
    }, [hash]);

    /**
     * Change locale
     * @param selectedLocale
     */
    const onChangeLocale = (selectedLocale: Locale) => {
        changeLocale(selectedLocale);
        setOpenedMenu(null);
    };

    const onClickNavItem = (index: number) => {
        setWatchSectionVisibility(false);
        setScrollOnHashChange(true);
        onChangeActiveIndicator(index);
        setTimeout(() => {
            setWatchSectionVisibility(true);
        }, 1000);
    };

    /**
     * Change active indicator
     * @param index
     */
    const onChangeActiveIndicator = (index: number) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
        }
        const element = document.getElementById(list[index].id);
        if (element != null) {
            setActiveIndicator({
                width: element.offsetWidth,
                offset: element.offsetLeft,
            });
        }
    };

    return (
        <Container scroll={scroll} mouseY={mouseY} hasOpenedMenu={openedMenu != null}>
            <Left>
                <Logo />
            </Left>
            <Right ref={rightRef}>
                <Nav>
                    {list.map((item, index) => (
                        <NavItem
                            key={index}
                            to={item.path}
                            id={item.id}
                            onClick={() => onClickNavItem(index)}
                            className={
                                hash === item.path || (item.path === Routes.HOME && hash === '')
                                    ? 'focused'
                                    : ''
                            }
                            onMouseEnter={() => {
                                if (item.subList != null) setOpenedMenu('works');
                            }}
                            onMouseLeave={() => {
                                if (openedMenu === 'works' && item.subList != null) setOpenedMenu(null);
                            }}
                        >
                            {item.text}
                            {item.subList != null && (
                                <>
                                    <NavItemIcon className="subList-icon">
                                        <BiChevronDown />
                                    </NavItemIcon>

                                    {openedMenu === 'works' && (
                                        <FloatingList>
                                            {item.subList.map((subListItem, subListItemIndex) => (
                                                <FloatingListItem key={subListItemIndex}>
                                                    <FloatingListItemLink to={subListItem.path}>
                                                        {subListItem.text}
                                                    </FloatingListItemLink>
                                                </FloatingListItem>
                                            ))}
                                        </FloatingList>
                                    )}
                                </>
                            )}
                        </NavItem>
                    ))}
                    <NavIndicator {...activeIndicator} />
                </Nav>
                <Language
                    onMouseEnter={() => setOpenedMenu('language')}
                    onMouseLeave={() => setOpenedMenu(null)}
                >
                    <LanguageIcon>
                        <CiGlobe />
                    </LanguageIcon>
                    <LanguageText>{locale === Locale.EN ? 'EN' : 'FR'}</LanguageText>
                    {openedMenu === 'language' && (
                        <FloatingList right>
                            <FloatingListItem>
                                <FloatingListItemText onClick={() => onChangeLocale(Locale.EN)}>
                                    English
                                </FloatingListItemText>
                            </FloatingListItem>
                            <FloatingListItem>
                                <FloatingListItemText onClick={() => onChangeLocale(Locale.FR)}>
                                    Français
                                </FloatingListItemText>
                            </FloatingListItem>
                        </FloatingList>
                    )}
                </Language>
            </Right>
        </Container>
    );
};

export default HeaderDesktop;
