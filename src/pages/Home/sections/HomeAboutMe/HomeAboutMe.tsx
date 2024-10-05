import React, { useState } from 'react';
import { Card, ListView, PageSection, Text, Title } from '../../../../components';
import { Container, ListViewItem } from './HomeAboutMe-styles';
import { Routes } from '../../../../routes';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { useWindowSize } from 'usehooks-ts';

const years = [2014, 2018, 2020, 2021, 2023, 2024];

const HomeAboutMe = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const windowSize = useWindowSize();

    return (
        <PageSection id={Routes.ABOUT}>
            <Title>{t('home.about_me.title')}</Title>
            <Container>
                <Text>{t('home.about_me.text')}</Text>
                <ListView
                    list={years}
                    renderItem={(year, index) => (
                        <ListViewItem key={index} viewHeight={300}>
                            <Card>
                                <Text>{t(`home.about_me.sections.${year}` as ResourceKey)}</Text>
                            </Card>
                        </ListViewItem>
                    )}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    height={300}
                    labels={years.map((year) => year.toString())}
                    direction={windowSize.width > 650 ? 'vertical' : 'horizontal'}
                />
            </Container>
        </PageSection>
    );
};

export default HomeAboutMe;
