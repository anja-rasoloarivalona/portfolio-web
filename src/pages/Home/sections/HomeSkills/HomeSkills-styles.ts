import styled from 'styled-components';

export const TagCloudContainer = styled.div`
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(35, 53, 84, 0.5), rgba(0, 0, 0, 0) 20%);
        transform: translate(-50%, -50%);
        filter: blur(80px);
    }

    .tagcloud {
        display: inline-block;
        top: 0;
        left: 0;
    }

    .tagcloud--item {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.font.size.lg};
        color: ${({ theme }) => theme.colors.green};

        svg {
            font-size: ${({ theme }) => theme.font.size.xl};
            margin-right: 5px;
        }
    }
`;
