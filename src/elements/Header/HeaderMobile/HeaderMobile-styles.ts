import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div<{ scrollY: number }>`
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

    ${({ scrollY, theme }) => {
        if (scrollY > theme.config.header.height.default) {
            return {
                background: theme.colors.darkBlue,
                boxShadow: theme.box.shadow.main,
                borderBottom: `1px solid ${theme.colors.brightBlue}`,
            };
        }
    }}
`;

export const Left = styled.div`
    position: relative;
    z-index: 3;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 3;
`;

export const ToggleIcon = styled.div<{ isOpened: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 2.5rem;
    cursor: pointer;

    ${({ isOpened, theme }) => {
        if (isOpened === true) {
            return {
                '> div': {
                    backgroundColor: theme.colors.white,
                },
            };
        }
    }}

    & > div:nth-child(1) {
        transform-origin: top left;
        transform: rotate(${({ isOpened }) => (isOpened ? '37deg' : '0')});
    }

    & > div:nth-child(2) {
        transform-origin: center center;
        transform: scaleX(${({ isOpened }) => (isOpened ? 0 : 1)});
    }

    & > div:nth-child(3) {
        transform-origin: bottom left;
        transform: rotate(${({ isOpened }) => (isOpened ? '-37deg' : '0')});
    }
`;

export const ToggleIconBar = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100vh)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Menu = styled.div`
    height: 100vh;
    position: absolute;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    transform: translateY(-100vh);
    opacity: 0;
    animation: ${fadeIn} 0.3s forwards; // animation duration is 1 second, forwards keeps the final state
    padding: ${({ theme }) => theme.box.spacing.md};
    padding-top: ${({ theme }) => theme.config.header.height.default}px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const MenuList = styled.ul``;

const menuItemStyles = css`
    font-size: ${({ theme }) => theme.font.size.xl};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey} !important;
`;

export const MenuListItem = styled.li`
    margin: ${({ theme }) => theme.box.spacing.xxl};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuListItemLink = styled(Link)`
    ${menuItemStyles}
`;

export const MenuListItemText = styled.div`
    ${menuItemStyles}
`;

export const MenuFooter = styled.div`
    display: flex;
    align-items: center;
`;
