import React from 'react';
import { Container, List } from './ListViewVertical-styles';

type Props<T> = {
    height: number;
    activeIndex: number;
    list: Array<T>;
    renderItem: (item: T, index: number) => React.ReactNode;
};

const ListViewVertical = <T,>({ height, activeIndex, list, renderItem }: Props<T>) => {
    return (
        <Container className="list-view__preview" height={height}>
            <List height={height} activeIndex={activeIndex}>
                {list.map((item, index) => (
                    <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
                ))}
            </List>
        </Container>
    );
};

export default ListViewVertical;
