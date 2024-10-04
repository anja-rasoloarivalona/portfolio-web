import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.darkGrey};
    transition: all 0.5s ease;
    border-radius: 4px;

    &:hover {
        border-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.green};
        background: ${({ theme }) => theme.colors.greenTransparent};
        scale: 1.2;
    }

    .react-tooltip {
        background: ${({ theme }) => theme.colors.darkBlue};
        box-shadow: ${({ theme }) => theme.box.shadow.main};
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;
