import styled from 'styled-components';

export const Container = styled.div<{
    direction: 'vertical' | 'horizontal';
    offset: number;
}>`
    display: flex;
    align-items: center;

    ${({ direction, theme, offset }) => {
        if (direction === 'horizontal') {
            return {
                alignItems: 'unset',
                flexDirection: 'column',
                '.list-view': {
                    '&__select': {
                        width: '100%',
                        display: 'flex',
                        gap: theme.box.spacing.lg,
                        justifyContent: 'space-around',
                        paddingLeft: 'unset',

                        '&__scroll': {
                            top: 'unset',
                            bottom: 0,
                            width: '100%',
                            height: '2px',
                            '&__indicator': {
                                width: '7%',
                                height: '2px',
                                top: 'unset',
                                left: '4.5%',
                                bottom: 0,
                                transform: `translateX(${offset}px)`,
                            },
                        },
                        '&__item': {
                            flex: 1,
                            justifyContent: 'center',
                            '> div': {
                                fontSize: theme.font.size.md,
                                '&.active': {
                                    transform: ' scale(1.3)',
                                },
                            },
                        },
                    },
                },
            };
        }
    }}
`;

export const SelectList = styled.ul`
    min-width: max-content;
    margin-right: 6rem;
    height: max-content;
    position: relative;
    padding-left: ${({ theme }) => theme.box.spacing.lg};
    z-index: 2;

    ${({ theme }) => theme.breakpoints.midsize} {
        margin-right: 4rem;
    }
`;

export const SelectListScroll = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.brightBlue};
    border-radius: 5px;
`;

export const SelectListScrollIndicator = styled.div<{ offset: number }>`
    position: absolute;
    top: 1rem;
    left: 0;
    border-radius: 5px;
    width: 100%;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: 2;
    transition: all 0.3s ease-in;
    transform: ${({ offset }) => `translateY(${offset}px)`};
`;

export const SelectListItem = styled.li`
    height: 5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const SelectListItemText = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightGrey};
    transition: all 0.3s ease-in;
    transform-origin: center left;

    &.active {
        color: ${({ theme }) => theme.colors.green};
        transform: scale(1.5);
    }
`;
