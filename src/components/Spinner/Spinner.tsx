import React from 'react';
import { Container, Div } from './Spinner-styles';
import { generateRange } from '../../helpers';

export enum SpinnerSize {
    MEDIUM = '40',
    SMALL = '20',
}

type Props = {
    size?: SpinnerSize;
};

const Spinner = ({ size = SpinnerSize.SMALL }: Props) => {
    return (
        <Container className="spinner" size={parseInt(size)}>
            {generateRange(12).map((i) => (
                <Div key={i} size={parseInt(size)} />
            ))}
        </Container>
    );
};

export default Spinner;
