import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    min-height: 78vh;
    padding-bottom: 5vh;
`;

export const Intro = styled.div`
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

export const IntroTitle = styled.h2`
    margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.4;
`;

export const IntroText = styled.div`
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Content = styled.div<{ isDisplayed: boolean }>`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 23rem max-content; /* Use auto for the first row */
    opacity: 1;
    transition: all 0.3s ease-in;

    ${({ theme }) => theme.breakpoints.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: unset;
        grid-auto-rows: max-content;
        row-gap: ${({ theme }) => theme.box.spacing.lg};
    }

    ${({ isDisplayed }) => {
        if (isDisplayed === false) {
            return {
                opacity: 0,
                scale: 0,
            };
        }
    }}
`;

// **********************************************************************************************************
// Info styles
// **********************************************************************************************************

export const Info = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: min-content;
    margin-right: ${({ theme }) => theme.box.spacing.xxl};

    ${({ theme }) => theme.breakpoints.tablet} {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        margin-right: 0px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
        padding-bottom: 2rem;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.box.spacing.md};
    padding-left: 0px;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const InfoItemIcon = styled.div`
    margin-right: ${({ theme }) => theme.box.spacing.md};
    svg {
        font-size: ${({ theme }) => theme.font.size.lg};
    }
`;

export const InfoItemText = styled.div``;

// **********************************************************************************************************
// Button link styles
// **********************************************************************************************************

export const ButtonLinks = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.box.spacing.md};

    ${({ theme }) => theme.breakpoints.tablet} {
        justify-content: center;
    }
`;

// **********************************************************************************************************
// Form styles
// **********************************************************************************************************

const inputStyle = css`
    width: 100%;
    background: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white} !important;
    padding: ${({ theme }) => theme.box.spacing.md};
    font-size: ${({ theme }) => theme.font.size.lg};
    border: 1px solid ${({ theme }) => theme.colors.brightBlue};
    caret-color: ${({ theme }) => theme.colors.green};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.green};
    }

    :-webkit-autofill {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
        background-color: ${({ theme }) => theme.colors.blue} !important;
    }
`;

export const Form = styled.form`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: max-content;
    grid-gap: ${({ theme }) => theme.box.spacing.lg};
    border-radius: 0.5rem;
    flex: 1;
    align-self: center;

    ${({ theme }) => theme.breakpoints.tablet} {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        margin-bottom: 4rem;
    }
`;

export const FormTitle = styled.h2`
    grid-column: 1 / -1;
    margin-top: ${({ theme }) => theme.box.spacing.md};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    color: ${({ theme }) => theme.colors.white};
`;

export const FormGroup = styled.div<{ isExpanded?: boolean }>`
    display: flex;
    flex-direction: column;

    ${({ isExpanded }) => {
        if (isExpanded === true) {
            return {
                gridColumn: '1/-1',
            };
        }
    }}
`;

export const FormGroupLabel = styled.label`
    margin-bottom: ${({ theme }) => theme.box.spacing.sm};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.font.size.sm};

    .required {
        color: ${({ theme }) => theme.colors.red};
    }
`;

export const FormGroupInput = styled.input`
    ${inputStyle};
    height: 4.5rem;
`;

export const FormGroupTextarea = styled.textarea`
    ${inputStyle};
    min-height: 15rem;
    max-height: 30rem;
    resize: vertical;
`;

export const FormFooter = styled.div`
    grid-column: 1/ -1;
    display: flex;
    justify-content: center;
`;

export const ErrorBanner = styled.div`
    grid-column: 1 / -1;
    border: 1px solid ${({ theme }) => theme.colors.red};
    padding: ${({ theme }) => theme.box.spacing.md};
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.font.size.md};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.redTransparent};
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        cursor: pointer;
        font-size: ${({ theme }) => theme.font.size.lg};
    }
`;

export const ErrorBannerMessage = styled.div``;

export const AnimationContainer = styled.div<{ isDisplayed: boolean }>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 2;
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in;
    opacity: 0;
    transform: scale(0);

    ${({ isDisplayed }) => {
        if (isDisplayed === true) {
            return {
                opacity: 1,
                transform: 'scale(1)',
            };
        }
    }}
`;

export const AnimationMessage = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.green};
    margin-top: ${({ theme }) => theme.box.spacing.xxl};
`;
