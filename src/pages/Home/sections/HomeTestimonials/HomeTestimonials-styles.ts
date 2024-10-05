import styled from 'styled-components';

export const Container = styled.div`
    height: max-content;
    max-height: max-content;
    max-width: 100vw;
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 10vh;
    position: relative;

    .slider__item {
        opacity: 0.15;
        transition: 0.3s ease-in;
    }

    .slick-active {
        .slider__item {
            opacity: 1;
        }
    }

    .slick-dots {
        li.slick-active button::before {
            color: ${({ theme }) => theme.colors.lightGrey};
        }
    }

    ${({ theme }) => theme.breakpoints.midsize} {
        margin-top: ${({ theme }) => theme.box.spacing.xl};
        margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    }
`;

export const SliderItem = styled.div`
    padding: ${({ theme }) => theme.box.spacing.md};
`;

export const SliderArrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7%;
    margin: auto;
    height: max-content;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in;

    svg {
        font-size: 4rem;
        opacity: 0.6;
        transition: all 0.3s ease-in;
        color: ${({ theme }) => theme.colors.darkGrey};

        &:hover {
            opacity: 1;
            color: ${({ theme }) => theme.colors.grey};
        }
    }

    &:last-child {
        left: unset;
        right: 7%;
    }

    ${({ theme }) => theme.breakpoints.midsize} {
        display: none;
    }
`;

export const Testimonial = styled.div`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.box.shadow.main};
    padding: ${({ theme }) => theme.box.spacing.md};
    height: max-content;
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TestimonialText = styled.span`
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkGrey};
    position: relative;

    svg {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const TestimonialAuthor = styled.div`
    margin-top: ${({ theme }) => theme.box.spacing.md};
`;

export const TestimonialAuthorName = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey};
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.box.spacing.xxs};
`;

export const TestimonialAuthorInfo = styled.div`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.darkGrey};
`;
