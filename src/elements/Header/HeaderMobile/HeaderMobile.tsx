import React, { useContext, useMemo, useState } from 'react';
import {
    Container,
    Left,
    Menu,
    MenuFooter,
    MenuList,
    MenuListItem,
    MenuListItemLink,
    MenuListItemText,
    Right,
    ToggleIcon,
    ToggleIconBar,
} from './HeaderMobile-styles';
import { Routes } from '../../../routes';
import { useTranslation } from 'react-i18next';
import { useLocale, useScroll } from '../../../hooks';
import { ButtonLink, ButtonLinkTypes } from '../../../components';
import { Locale } from '../../../types';
import { AppContext } from '../../../App';
import { Logo } from '../components';
import { changeLocale } from '../../../translations';

const HeaderMobile = () => {
    const { t } = useTranslation();
    const locale = useLocale();
    const [isOpened, setIsOpened] = useState(false);
    const { setScrollOnHashChange } = useContext(AppContext);
    const { scrollY } = useScroll();

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

    /**
     * On click
     */
    const onClickMenuItem = () => {
        setIsOpened(false);
        setScrollOnHashChange(true);
    };

    return (
        <Container scrollY={scrollY}>
            <Left>
                <Logo />
            </Left>
            <Right>
                <ToggleIcon isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)}>
                    <ToggleIconBar />
                    <ToggleIconBar />
                    <ToggleIconBar />
                </ToggleIcon>
            </Right>
            {isOpened && (
                <Menu>
                    <MenuList>
                        {list.map((item) => (
                            <MenuListItem key={item.id} onClick={() => onClickMenuItem()}>
                                <MenuListItemLink to={item.path}>{item.text}</MenuListItemLink>
                            </MenuListItem>
                        ))}
                        <MenuListItem>
                            <MenuListItemText
                                onClick={() => changeLocale(locale === Locale.EN ? Locale.FR : Locale.EN)}
                            >
                                {locale === Locale.EN ? 'Français' : 'English'}
                            </MenuListItemText>
                        </MenuListItem>
                    </MenuList>

                    <MenuFooter>
                        <ButtonLink type={ButtonLinkTypes.GITHUB} />
                        <ButtonLink type={ButtonLinkTypes.BITBUCKET} />
                        <ButtonLink type={ButtonLinkTypes.LINKEDIN} />
                        <ButtonLink type={ButtonLinkTypes.EMAIL} />
                        <ButtonLink type={ButtonLinkTypes.CV} />
                    </MenuFooter>
                </Menu>
            )}
        </Container>
    );
};

export default HeaderMobile;
