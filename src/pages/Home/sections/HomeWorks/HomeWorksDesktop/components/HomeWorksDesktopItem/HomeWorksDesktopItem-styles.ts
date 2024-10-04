import styled from 'styled-components';

export const Wrapper = styled.li<{
    isDisplayed: boolean;
    isActive: boolean;
    isHidden: boolean;
}>`
    opacity: 1;
    transition: all 1s ease-in;
    width: 100%;
    height: 100%;
    z-index: 2;

    ${({ isDisplayed }) => {
        if (isDisplayed !== true) {
            return {
                opacity: 0.5,
            };
        }
    }}

    ${({ isHidden }) => {
        if (isHidden === true) {
            return {
                transition: 'none',
                width: 0,
                height: 0,
                overflow: 'hidden',
            };
        }
    }}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
`;

export const CloseContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
    height: 0;
    z-index: 5;
`;

export const Close = styled.div`
    transform: translateX(16px) translateY(12px);
    cursor: pointer;
    svg {
        font-size: ${({ theme }) => theme.font.size.xxl};
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    &:hover {
        svg {
            color: ${({ theme }) => theme.colors.green};
        }
    }
`;

export const Phone = styled.div`
    position: relative;
    width: max-content;
    height: 760px;
    display: flex;
    scale: 0.8;
    transform: translateX(8px);
    margin-right: 9.5rem;
`;

export const PhoneImage = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 391px;
    margin: auto;
    z-index: 1;
`;

export const PhoneContent = styled.iframe`
    width: 340px;
    height: 674px;
    transform: scale(1);
    transform-origin: top left;
    background-color: white;
    z-index: 2;
    border-radius: 6px;
    transform: translate(25px, 37px);
`;

export const Intro = styled.div`
    margin-top: 220px;
    margin-right: 3rem;
    height: max-content;
    display: flex;
    flex-direction: column;

    button {
        align-self: flex-end;
    }
`;

export const IntroHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.box.spacing.xl};
`;

export const IntroHeaderPost = styled.h4`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.green};
    text-align: end;
`;

export const IntroHeaderCompanyName = styled.h1`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.4;
    text-align: end;
`;

export const IntroText = styled.div`
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
`;

export const Content = styled.div`
    min-height: 100vh;
    padding: ${({ theme }) => `${theme.box.spacing.md} ${theme.box.spacing.xxl}`};
`;
