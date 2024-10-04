import React from 'react';
import { Work } from '../../../../../../../types';
import {
    Container,
    Content,
    ContentDescription,
    ContentSubtitle,
    ContentTitle,
    Image,
    ImageContainer,
} from './HomeWorksMobileItem-styles';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { Button } from '../../../../../../../components';

type Props = {
    work: Work;
};

const HomeWorksMobileItem = ({ work }: Props) => {
    const { t } = useTranslation();

    return (
        <Container>
            <ImageContainer>
                <Image src={work.image} />
            </ImageContainer>
            <Content>
                <ContentSubtitle>{t(work.post)}</ContentSubtitle>
                <ContentTitle>{work.companyName}</ContentTitle>
                <ContentDescription>
                    {t(`works.${work.translationKey}.tagline` as ResourceKey)}
                </ContentDescription>
                <Button>Learn more</Button>
            </Content>
        </Container>
    );
};

export default HomeWorksMobileItem;
