import React from 'react';
import { Container } from './PageContainer-styles';

type Props = {
    children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
    return <Container className="page__container">{children}</Container>;
};

export default PageContainer;
