import styled from 'styled-components';

export const Container = styled.div`
    height: 34rem;
    width: 100%;
    max-width: 60rem;
    display: flex;
    align-items: center;
    box-shadow: ${({ theme }) => theme.box.shadow.main};
`;

export const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 1s ease;

    &::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.darkBlue};
        opacity: 0.92;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    z-index: 2;
    padding: ${({ theme }) => theme.box.spacing.lg};
`;

export const ContentSubtitle = styled.h4`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.green};
`;

export const ContentTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.4;
`;

export const ContentDescription = styled.span`
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.grey};
    line-height: 1.4;
    box-shadow: ${({ theme }) => theme.box.shadow};
    margin: ${({ theme }) => `${theme.box.spacing.xl} 0`};
`;
