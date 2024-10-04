import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

export const Greeting = styled.div`
    color: ${({ theme }) => theme.colors.green};
`;

export const Name = styled.h1`
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.box.spacing.md} 0;

    @media (max-width: 1135px) {
        font-size: 7rem;
    }

    @media (max-width: 860px) {
        font-size: 6rem;
    }

    @media (max-width: 450px) {
        font-size: 4rem;
    }
`;

export const Text = styled.div`
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ButtonLinks = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.box.spacing.md};
`;
