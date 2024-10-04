import styled, { DefaultTheme } from 'styled-components';

const getConfig = (size: number, theme: DefaultTheme) => {
    return {
        container: {
            height: `${size}px`,
            width: `${size}px`,
        },
        div: {
            transformOrigin: `${size / 2}px ${size / 2}px`,
        },
        after: {
            top: `${(1.5 * size) / 40}px`,
            left: `${(18.5 * size) / 40}px`,
            width: `${(3 * size) / 40}px`,
            height: `${(9 * size) / 40}px`,
            borderRadius: '20%',
            background: theme.colors.green,
        },
    };
};

export const Container = styled.div<{
    size: number;
}>`
    display: inline-block;
    position: relative;
    ${({ size, theme }) => ({ ...getConfig(size, theme).container })};
`;

export const Div = styled.div<{
    size: number;
}>`
    transform-origin: 20px 20px;
    animation: lds-spinner 1.2s linear infinite;
    ${({ size, theme }) => ({ ...getConfig(size, theme).div })};

    &:after {
        content: '';
        display: block;
        position: absolute;
        ${({ size, theme }) => ({ ...getConfig(size, theme).after })};
    }

    &:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }
    &:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }
    &:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }
    &:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }
    &:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }
    &:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }
    &:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }
    &:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }
    &:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }
    &:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }
    &:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }
    &:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
    @keyframes lds-spinner {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
