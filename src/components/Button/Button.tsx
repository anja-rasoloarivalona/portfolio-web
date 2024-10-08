import React, { ButtonHTMLAttributes } from 'react';
import {
    Anchor,
    Container,
    LeadingIconContainer,
    TrailingIconBar,
    TrailingIconContainer,
} from './Button-styles';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    hasArrow?: boolean;
    path?: string;
    externalPath?: string;
    leadingIcon?: React.ReactNode;
    isExpanded?: boolean;
    isLoading?: boolean;
    isBorderLess?: boolean;
};

const Button = ({
    children,
    leadingIcon,
    path,
    externalPath,
    isExpanded = false,
    isBorderLess = false,
    isLoading = false,
    hasArrow = true,
}: Props) => {
    const renderButton = () => {
        return (
            <Container className="button" isExpanded={isExpanded} isBorderLess={isBorderLess}>
                {leadingIcon != null && (
                    <LeadingIconContainer>
                        {isLoading === false ? leadingIcon : <Spinner />}
                    </LeadingIconContainer>
                )}
                {children}
                {leadingIcon == null && hasArrow === true && (
                    <TrailingIconContainer className="button__icon">
                        <TrailingIconBar className="button__icon__bar" />
                        <BsChevronRight />
                    </TrailingIconContainer>
                )}
            </Container>
        );
    };

    if (path != null) {
        return <Link to={path}>{renderButton()}</Link>;
    }

    if (externalPath != null) {
        return (
            <Anchor href={externalPath} target="_blank" rel="noopener norefereer">
                {renderButton()}
            </Anchor>
        );
    }

    return renderButton();
};

export default Button;
