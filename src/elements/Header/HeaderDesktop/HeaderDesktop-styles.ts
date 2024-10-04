import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ScrollPosition } from '../../../hooks';

export const Container = styled.div<{ scroll: ScrollPosition; mouseY: number; hasOpenedMenu: boolean }>`
    height: ${({ theme }) => theme.config.header.height.default}px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.box.spacing.xl};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;

    ${({ scroll, theme, mouseY, hasOpenedMenu }) => {
        const headerHeight = theme.config.header.height.default;

        if (mouseY < headerHeight && scroll.scrollY < headerHeight) {
            // default state
            return;
        } else if (mouseY < headerHeight || hasOpenedMenu) {
            // floating state
            return {
                opacity: 1,
                background: theme.colors.darkBlue,
                boxShadow: theme.box.shadow.main,
                borderBottom: `1px solid ${theme.colors.brightBlue}`,
            };
        } else if (scroll.scrollY > headerHeight) {
            return {
                opacity: scroll.scrollDirection === 'up' ? 1 : 0,
                background: theme.colors.darkBlue,
                boxShadow: theme.box.shadow.main,
                transform: `translateY(${scroll.scrollDirection === 'up' ? '0px' : '-105%'})`,
                borderBottom:
                    scroll.scrollDirection === 'up' ? `1px solid ${theme.colors.brightBlue}` : 'none',
            };
        } else {
            return {
                transform: `translateY(-${scroll.scrollY}px)`,
            };
        }
    }}
`;

export const Left = styled.div``;

export const Right = styled.div`
    display: flex;
    height: 100%;
`;

export const Nav = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.box.spacing.xxl};
    position: relative;
    height: 100%;
`;

export const NavItem = styled(NavLink)`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.darkGrey};
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};

        .subList-icon svg {
            color: ${({ theme }) => theme.colors.green};
        }
    }

    &.focused {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const NavItemIcon = styled.div`
    margin-left: ${({ theme }) => theme.box.spacing.sm};
    position: absolute;
    left: 90%;

    svg {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const NavIndicator = styled.div<{ width: number; offset: number }>`
    position: absolute;
    bottom: 5px;
    left: ${({ width }) => `${width * 0.15}px`};
    width: ${({ width }) => `${width * 0.7}px`};
    height: 3px;
    background: ${({ theme }) => theme.colors.green};
    transform: translateX(${({ offset }) => `${offset}px`});
    transition: all 0.3s ease;
`;

export const Language = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${({ theme }) => theme.box.spacing.xl};
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};

        svg {
            color: ${({ theme }) => theme.colors.green};
        }
    }
`;

export const LanguageIcon = styled.div`
    margin-right: ${({ theme }) => theme.box.spacing.sm};
    svg {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const LanguageText = styled.div``;

export const FloatingList = styled.ul<{ right?: boolean }>`
    position: absolute;
    top: 90%;
    left: 0;
    width: max-content;
    min-width: 100%;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 5px;
    overflow: hidden;
    z-index: 2;
    box-shadow: ${({ theme }) => theme.box.shadow.main};
    transform: translateX(-13%);

    ${({ right }) => {
        if (right === true) {
            return {
                left: 'unset',
                margin: 'unset',
                right: 0,
                transform: 'none',
            };
        }
    }}
`;

const floatingListItemStyles = css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${({ theme }) => theme.box.spacing.md};
    color: ${({ theme }) => theme.colors.grey} !important;

    &:hover {
        background-color: ${({ theme }) => theme.colors.greenTransparent};
        cursor: pointer;
        color: ${({ theme }) => theme.colors.green} !important;
    }
`;

export const FloatingListItem = styled.li`
    height: 4rem;
`;

export const FloatingListItemLink = styled(Link)`
    ${floatingListItemStyles}
`;

export const FloatingListItemText = styled.div`
    ${floatingListItemStyles}
`;
