import styled from 'styled-components';

export const Container = styled.div<{ isMounted: boolean }>`
    background-color: ${({ theme }) => theme.colors.blue};
    min-height: 100vh;
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.grey};

    * {
        opacity: 0;
    }

    ${({ isMounted }) => {
        if (isMounted === true) {
            return {
                '*': {
                    opacity: 1,
                },
            };
        }
    }}
`;
