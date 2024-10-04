import React from 'react';
import { Container } from './Card-styles';

type Props = {
    children: React.ReactNode;
};

const Card = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export default Card;
