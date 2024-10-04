import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 14rem minmax(2rem, 1fr) minmax(50vw, 90rem) minmax(2rem, 1fr) 14rem;
    grid-auto-rows: max-content;

    ${({ theme }) => theme.breakpoints.tablet} {
        grid-template-columns: 10rem minmax(2rem, 1fr) minmax(50vw, 90rem) minmax(2rem, 1fr) 10rem;
    }

    ${({ theme }) => theme.breakpoints.midsize} {
        grid-template-columns: 7rem 0rem minmax(50vw, 90rem) 0rem 7rem;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
        grid-template-columns: ${({ theme }) =>
            `${theme.box.spacing.xl} 0rem minmax(50vw, 90rem) 0rem ${theme.box.spacing.xl}`};
    }
`;
