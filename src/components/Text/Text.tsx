import React from 'react';
import { Container, Part } from './Text-styles';
import { useTheme } from 'styled-components';

type Props = {
    children: React.ReactNode;
};

const Text = ({ children }: Props) => {
    const theme = useTheme();

    // Split by <br> first, then handle colors separately
    const lines = String(children)
        .split(/<br\s*\/?>/g)
        .filter(Boolean); // Split by <br> tags

    return (
        <Container>
            {lines.map((line, lineIndex) => {
                // Split each line by <color> tags
                const parts = line.split(/<color>(.*?)<\/color>/g).filter(Boolean);

                return (
                    <React.Fragment key={lineIndex}>
                        {parts.map((part, partIndex) => {
                            const isColored = partIndex % 2 === 1; // Odd indices are colored markers
                            const text = part;
                            const color = isColored ? theme.colors.green : theme.colors.darkGrey;

                            return (
                                <Part key={partIndex} style={{ color }}>
                                    {text}
                                </Part>
                            );
                        })}
                        {/* Add line break after each line */}
                        {lineIndex < lines.length - 1 && (
                            <>
                                <br />
                                <br />
                            </>
                        )}
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

export default Text;
