import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
    height: ${({ height }) => `${height}px`};
    overflow: hidden;
`;

export const List = styled.ul<{ activeIndex: number; height: number }>`
    transform: ${({ activeIndex, height }) => `translateY(${activeIndex * height * -1}px)`};
    transition: all 0.3s ease-in;
`;
