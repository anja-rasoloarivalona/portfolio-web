import React, { useMemo, useState } from 'react';
import { Card, ListView, PageSection, Text, Title } from '../../../../components';
import { Container, ListViewItem } from './HomeAboutMe-styles';
import { Routes } from '../../../../routes';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { useWindowSize } from 'usehooks-ts';

const years = [2014, 2018, 2020, 2021, 2023];
const mobileViewHeight = [280, 300, 300, 350, 350];

const HomeAboutMe = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const windowSize = useWindowSize();
    const viewHeight = useMemo(
        () => (windowSize.width > 650 ? 300 : mobileViewHeight[activeIndex]),
        [windowSize.width, activeIndex],
    );

    return (
        <PageSection id={Routes.ABOUT}>
            <Title>{t('home.about_me.title')}</Title>
            <Container>
                <Text>{t('home.about_me.text')}</Text>
                <ListView
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    height={viewHeight}
                    labels={years.map((year) => year.toString())}
                    direction={windowSize.width > 650 ? 'vertical' : 'horizontal'}
                >
                    {years.map((year, index) => (
                        <ListViewItem key={index} viewHeight={viewHeight}>
                            <Card>
                                <Text>{t(`home.about_me.sections.${year}` as ResourceKey)}</Text>
                            </Card>
                        </ListViewItem>
                    ))}
                </ListView>
            </Container>
        </PageSection>
    );
};

export default HomeAboutMe;
