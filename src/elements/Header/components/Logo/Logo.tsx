import React from 'react';
import { Container } from './Logo-styles';
import { Routes } from '../../../../routes';

const Logo = () => {
    /**
     * On click
     */
    const onClick = () => {
        window.location.reload();
    };

    return (
        <Container href={Routes.HOME} onClick={onClick}>
            Anja.
        </Container>
    );
};

export default Logo;
