import React from 'react';
import { PageSection, Title } from '../../../../../components';
import { Container } from './HomeWorksMobile-styles';
import { config } from '../../../../../config/main';
import { HomeWorksMobileItem } from './components';
import { useTranslation } from 'react-i18next';

const HomeWorksMobile = () => {
    const { t } = useTranslation();
    return (
        <PageSection>
            <Title>{t('home.works.title')}</Title>
            <Container>
                {[...config.works.values()].map((work) => (
                    <HomeWorksMobileItem key={work.id} work={work} />
                ))}
            </Container>
        </PageSection>
    );
};

export default HomeWorksMobile;
