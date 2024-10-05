import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Container,
    SelectList,
    SelectListItem,
    SelectListItemText,
    SelectListScroll,
    SelectListScrollIndicator,
} from './ListView-styles';
import { generateId } from '../../helpers';
import { ListViewHorizontal, ListViewVertical } from './components';

type Props<T> = {
    list: Array<T>;
    renderItem: (item: T, index: number) => React.ReactNode;
    height: number; // in px
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    labels: Array<string>;
    direction?: 'vertical' | 'horizontal';
};

const ListView = <T,>({
    list,
    renderItem,
    activeIndex,
    setActiveIndex,
    labels,
    height,
    direction = 'vertical',
}: Props<T>) => {
    const listId = useRef(generateId());
    const [activeIndicator, setActiveIndicator] = useState({ offset: 0 });

    useEffect(() => {
        setTimeout(() => {
            onChangeIndex(activeIndex);
        });
    }, []);

    const listLabels = useMemo(() => {
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
        const element = document.getElementById(listLabels[selectedIndex].id);
        if (element != null) {
            setActiveIndicator({
                offset: direction === 'vertical' ? element.offsetTop : element.offsetLeft,
            });
        }
    };

    return (
        <Container className="list-view" direction={direction} {...activeIndicator}>
            <SelectList className="list-view__select">
                <SelectListScroll className="list-view__select__scroll">
                    <SelectListScrollIndicator
                        {...activeIndicator}
                        className="list-view__select__scroll__indicator"
                    />
                </SelectListScroll>
                {listLabels.map(({ label, id }, index) => (
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

            {direction === 'vertical' ? (
                <ListViewVertical
                    list={list}
                    renderItem={renderItem}
                    activeIndex={activeIndex}
                    height={height}
                />
            ) : (
                <ListViewHorizontal
                    list={list}
                    renderItem={renderItem}
                    activeIndex={activeIndex}
                    onChangeIndex={onChangeIndex}
                />
            )}
        </Container>
    );
};

export default ListView;
