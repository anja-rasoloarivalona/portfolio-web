import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Container,
    PreviewList,
    PreviewListContainer,
    SelectList,
    SelectListItem,
    SelectListItemText,
    SelectListScroll,
    SelectListScrollIndicator,
} from './ListView-styles';
import { generateId } from '../../helpers';

type Props = {
    children: React.ReactNode;
    height: number; // in px
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    labels: Array<string>;
    direction?: 'vertical' | 'horizontal';
};

const ListView = ({
    activeIndex,
    setActiveIndex,
    labels,
    height,
    children,
    direction = 'vertical',
}: Props) => {
    const listId = useRef(generateId());
    const [activeIndicator, setActiveIndicator] = useState({ offset: 0 });

    useEffect(() => {
        setTimeout(() => {
            onChangeIndex(activeIndex);
        });
    }, []);

    const list = useMemo(() => {
        return labels.map((label, index) => ({
            id: `${listId.current}-${index}`,
            label: label,
        }));
    }, [labels]);

    /**
     * Update active index
     * @param selectedIndex
     */
    const onChangeIndex = (selectedIndex: number) => {
        if (activeIndex !== selectedIndex) {
            setActiveIndex(selectedIndex);
        }
        const element = document.getElementById(list[selectedIndex].id);
        if (element != null) {
            setActiveIndicator({
                offset: direction === 'vertical' ? element.offsetTop : element.offsetLeft,
            });
        }
    };

    return (
        <Container className="list-view" direction={direction} height={height} {...activeIndicator}>
            <SelectList className="list-view__select">
                <SelectListScroll className="list-view__select__scroll">
                    <SelectListScrollIndicator
                        {...activeIndicator}
                        className="list-view__select__scroll__indicator"
                    />
                </SelectListScroll>
                {list.map(({ label, id }, index) => (
                    <SelectListItem
                        key={index}
                        onMouseEnter={() => onChangeIndex(index)}
                        onClick={() => onChangeIndex(index)}
                        id={id}
                        className="list-view__select__item"
                    >
                        <SelectListItemText className={index === activeIndex ? 'active' : ''}>
                            {label}
                        </SelectListItemText>
                    </SelectListItem>
                ))}
            </SelectList>

            <PreviewListContainer className="list-view__preview" height={height}>
                <PreviewList height={height} activeIndex={activeIndex}>
                    {children}
                </PreviewList>
            </PreviewListContainer>
        </Container>
    );
};

export default ListView;
