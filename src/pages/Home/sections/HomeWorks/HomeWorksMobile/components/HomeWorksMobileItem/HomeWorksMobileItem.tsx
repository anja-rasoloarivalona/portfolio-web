import React, { useMemo } from 'react';
import { Work, WorkId } from '../../../../../../../types';
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

    const websiteUrl = useMemo(() => {
        if (work.id !== WorkId.NAIA) {
            return work.websiteUrl;
        }
        const auth = encodeURIComponent(
            window.btoa(
                JSON.stringify({
                    role: 'admin',
                    secret: process.env.REACT_APP_SECRET,
                }),
            ),
        );
        return `${work.websiteUrl}/uuid?auth=${auth}`;
    }, [work.id]);

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
                <Button externalPath={websiteUrl}> {t('home.works.cta')}</Button>
            </Content>
        </Container>
    );
};

export default HomeWorksMobileItem;
