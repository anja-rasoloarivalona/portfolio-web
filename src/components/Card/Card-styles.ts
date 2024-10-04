import styled from 'styled-components';

export const Container = styled.div`
    line-height: 1.4;
    background: ${({ theme }) => theme.colors.darkBlue};
    box-shadow: ${({ theme }) => theme.box.shadow.main};
    padding: ${({ theme }) => theme.box.spacing.md};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 0.5rem;
`;
