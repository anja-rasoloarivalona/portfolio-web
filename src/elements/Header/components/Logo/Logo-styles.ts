import styled from 'styled-components';

export const Container = styled.a`
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green} !important;

    &:hover {
        color: ${({ theme }) => theme.colors.darkGreen} !important;
    }
`;
