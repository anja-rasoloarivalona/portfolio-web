import React, { useMemo, useRef } from 'react';
import { PageSection, Text, Title } from '../../../../components';
import {
    Container,
    SliderArrow,
    SliderItem,
    Testimonial,
    TestimonialAuthor,
    TestimonialAuthorInfo,
    TestimonialAuthorName,
    TestimonialText,
} from './HomeTestimonials-styles';
import Slider from 'react-slick';
import { list } from './HomeTestimonials-config';
import { useLocale } from '../../../../hooks';
import { FaQuoteLeft, FaQuoteRight, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useWindowSize } from 'usehooks-ts';
import { Breakpoints } from '../../../../theme';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { formatDate } from '../../../../helpers';

const HomeTestimonials = () => {
    const { t } = useTranslation();
    const sliderRef = useRef<Slider>(null);
    const locale = useLocale();
    const windowSize = useWindowSize();

    const sliderConfig = useMemo(() => {
        if (windowSize.width <= Breakpoints.MOBILE) {
            return {
                centerPadding: '0px',
            };
        }
        if (windowSize.width <= Breakpoints.TABLET) {
            return {
                centerPadding: '100px',
            };
        }
        return {
            centerPadding: '200px',
        };
    }, [windowSize.width]);

    return (
        <PageSection expandWidth={windowSize.width <= Breakpoints.DESKTOP}>
            <Title isCentered>{t('home.testimonials.title')}</Title>
            <Container>
                <SliderArrow onClick={() => sliderRef.current!.slickPrev()}>
                    <FaChevronCircleLeft />
                </SliderArrow>

                <Slider
                    ref={sliderRef}
                    speed={700}
                    initialSlide={0}
                    slidesToScroll={1}
                    slidesToShow={1}
                    infinite={true}
                    dots={true}
                    className="slider"
                    arrows={false}
                    // autoplay={true}
                    autoplaySpeed={5000}
                    pauseOnHover={true}
                    pauseOnFocus={true}
                    pauseOnDotsHover={true}
                    centerMode={true}
                    {...sliderConfig}
                >
                    {list.map((item, index) => (
                        <SliderItem key={index} className="slider__item">
                            <Testimonial>
                                <TestimonialText>
                                    <FaQuoteLeft />
                                    &nbsp;&nbsp;
                                    <Text>{t(`home.testimonials.list.${item.id}` as ResourceKey)}</Text>
                                    &nbsp;&nbsp;
                                    <FaQuoteRight />
                                </TestimonialText>
                                <TestimonialAuthor>
                                    <TestimonialAuthorName>
                                        {item.author}, {t(`generic.${item.post}` as ResourceKey)}
                                    </TestimonialAuthorName>
                                    <TestimonialAuthorInfo>
                                        {formatDate(item.date, locale)}
                                    </TestimonialAuthorInfo>
                                </TestimonialAuthor>
                            </Testimonial>
                        </SliderItem>
                    ))}
                </Slider>

                <SliderArrow onClick={() => sliderRef.current!.slickNext()}>
                    <FaChevronCircleRight />
                </SliderArrow>
            </Container>
        </PageSection>
    );
};

export default HomeTestimonials;
