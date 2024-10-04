import styled from 'styled-components';

export const Container = styled.div<{
    isActive: boolean;
    isClosing: boolean;
}>`
    display: flex;
    transition: all 0.3s ease-in;
    position: relative;

    .list-view {
        align-items: unset;
        transition: all 0.3s ease-in;
        overflow: hidden;

        &__select {
            margin-right: 13.5rem;
            margin-top: 220px;
            transition: all 0.3s ease-in;
        }

        &__preview {
            > ul {
            }
        }
    }

    ${({ isActive, isClosing, theme }) => {
        if (isActive === true) {
            return {
                position: 'relative',
                zIndex: 11,

                '.list-view': {
                    boxShadow: theme.box.shadow.main,
                    background: theme.colors.blue,
                    borderRadius: '5px',
                },
                '.list-view__select': {
                    transform: 'translateX(-100vw)',
                    margin: 0,
                    padding: 0,
                    minWidth: 'unset',
                    width: '0px',
                    opacity: 0,
                },
                '.list-view__preview': {
                    height: '90vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    padding: `0 ${theme.box.spacing.xl}`,
                    ' > ul': {
                        transform: 'none',
                        transition: 'none',
                    },
                },
            };
        }

        if (isClosing === true) {
            return {
                '.list-view__preview': {
                    ' > ul': {
                        transition: 'none',
                    },
                },
            };
        }
    }}
`;

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #7d8187;
    z-index: 10;
    opacity: 0.8;
`;
