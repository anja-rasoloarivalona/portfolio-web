import styled from 'styled-components';

export const Container = styled.div<{ expandHeight: boolean; expandWidth: boolean }>`
    grid-column: 3/4;
    min-height: max-content;
    padding-top: ${({ theme }) => theme.config.header.height.default}px;
    display: flex;
    flex-direction: column;

    ${({ expandHeight }) => {
        if (expandHeight === true) {
            return {
                minHeight: '100vh',
            };
        }
    }}

    ${({ expandWidth }) => {
        if (expandWidth === true) {
            return {
                gridColumn: '1/-1',
                '.page__section__title': {
                    margin: `0px 7rem`,
                    width: 'unset',
                },
            };
        }
    }}

    ${({ theme }) => theme.breakpoints.mobile} {
        ${({ expandWidth }) => {
            if (expandWidth === true) {
                return {
                    '.page__section__title': {
                        margin: `0px 2rem`,
                    },
                };
            }
        }}
    }
`;
