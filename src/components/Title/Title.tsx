import React from 'react';
import { Container, Text, Bar } from './Title-styles';

type Props = {
    children: React.ReactNode;
    isCentered?: boolean;
};

const Title = ({ children, isCentered = false }: Props) => {
    return (
        <Container isCentered={isCentered} className="page__section__title">
            {isCentered && <Bar />}
            <Text>{children}</Text>
            <Bar />
        </Container>
    );
};

export default Title;
