import React, { useContext } from 'react';
import { Button, ButtonLink, ButtonLinkTypes, PageSection } from '../../../../components';
import { ButtonLinks, Container, Greeting, Name, Text } from './HomeHero-styles';
import { Routes } from '../../../../routes';
import { AppContext } from '../../../../App';
import { useTranslation } from 'react-i18next';
import { getGreeting } from '../../../../helpers';

const HomeHero = () => {
    const { t } = useTranslation();
    const { setScrollOnHashChange } = useContext(AppContext);

    return (
        <PageSection expandHeight id={Routes.HOME}>
            <Container>
                <Greeting>{t('home.hero.greeting', { greeting: getGreeting(t) })}</Greeting>
                <Name>Anja Rasoloarivalona</Name>
                <Text>{t('home.hero.text')}</Text>
                <ButtonLinks>
                    <ButtonLink type={ButtonLinkTypes.BITBUCKET} />
                    <ButtonLink type={ButtonLinkTypes.LINKEDIN} />
                    <ButtonLink type={ButtonLinkTypes.CV} />
                    <ButtonLink type={ButtonLinkTypes.GITHUB} />
                    <ButtonLink type={ButtonLinkTypes.EMAIL} />

                    <Button
                        path={Routes.CONTACT}
                        onClick={() => setScrollOnHashChange(true)}
                        hasArrow={false}
                    >
                        {t('generic.contact')}
                    </Button>
                </ButtonLinks>
            </Container>
        </PageSection>
    );
};

export default HomeHero;
