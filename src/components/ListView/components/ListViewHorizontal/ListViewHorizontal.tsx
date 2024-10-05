import React, { useEffect, useRef } from 'react';
import { Container, SliderItem } from './ListViewHoriztonal-styles';
import Slider from 'react-slick';

type Props<T> = {
    list: Array<T>;
    renderItem: (item: T, index: number) => React.ReactNode;
    activeIndex: number;
    onChangeIndex: (index: number) => void;
};

const ListViewHorizontal = <T,>({ list, renderItem, activeIndex, onChangeIndex }: Props<T>) => {
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <Container>
            <Slider
                ref={sliderRef}
                initialSlide={activeIndex}
                slidesToScroll={1}
                slidesToShow={1}
                infinite={false}
                dots={false}
                arrows={false}
                centerMode={true}
                centerPadding="0px"
                afterChange={(current) => onChangeIndex(current)}
            >
                {list.map((item, index) => (
                    <SliderItem key={index}>{renderItem(item, index)}</SliderItem>
                ))}
            </Slider>
        </Container>
    );
};

export default ListViewHorizontal;
