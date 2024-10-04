import React, { useMemo, useRef } from 'react';
import { ButtonLinkTypes, lists } from './ButtonLink-config';
import { Container, IconContainer } from './ButtonLink-styles';
import { Tooltip } from 'react-tooltip';
import { generateId } from '../../helpers';

type Props = {
    type: ButtonLinkTypes;
};

const ButtonLink = ({ type }: Props) => {
    const id = useRef(generateId());
    const { label, Icon, path } = useMemo(() => lists[type], [type]);

    return (
        <Container data-tooltip-id={id.current} href={path} target="_blank" rel="noopener norefereer">
            <IconContainer>
                <Icon />
            </IconContainer>
            <Tooltip id={id.current} place="bottom">
                {label}
            </Tooltip>
        </Container>
    );
};

export default ButtonLink;
