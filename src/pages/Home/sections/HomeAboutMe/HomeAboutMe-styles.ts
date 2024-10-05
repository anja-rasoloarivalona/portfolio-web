import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;

    .list-view {
        margin-top: ${({ theme }) => `${theme.box.spacing.lg}`};
    }

    @media (max-width: 650px) {
        margin-bottom: 0px;
    }
`;

export const ListViewItem = styled.div<{ viewHeight: number }>`
    height: ${({ viewHeight }) => `${viewHeight}px`};
    padding: ${({ theme }) => `${theme.box.spacing.lg}`};
    transition: height 0.3s ease-in;

    > div {
        height: ${({ viewHeight }) => `${viewHeight * 0.9}px`};
        transition: height 0.3s ease-in;
    }

    @media (max-width: 650px) {
        padding: 0;
        height: max-content;

        > div {
            height: max-content;
        }
    }
`;
