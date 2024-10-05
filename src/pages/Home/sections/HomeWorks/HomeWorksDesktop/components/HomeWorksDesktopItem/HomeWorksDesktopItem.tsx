import React, { useMemo, useRef } from 'react';
import { Work, WorkId } from '../../../../../../../types';
import {
    Wrapper,
    Container,
    Intro,
    IntroText,
    Phone,
    PhoneContent,
    PhoneImage,
    Close,
    IntroHeader,
    IntroHeaderPost,
    IntroHeaderCompanyName,
    Content,
    Header,
    CloseContainer,
} from './HomeWorksDesktopItem-styles';
import { Button, Card, Title } from '../../../../../../../components';
import phoneImage from '../../../../../../../assets/phone1.png';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type Props = {
    work: Work;
    isDisplayed: boolean; // displayed from view list
    isActive: boolean; // focused as modal
    isHidden: boolean; // hidden because another one is focused as modal
    viewWork: () => void;
    closeWork: () => void;
};

const HomeWorksDesktopItem = ({ work, isDisplayed, isActive, isHidden, closeWork }: Props) => {
    const { t } = useTranslation();
    const ref = useRef<HTMLLIElement>(null);

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
        <Wrapper ref={ref} key={work.id} isActive={isActive} isDisplayed={isDisplayed} isHidden={isHidden}>
            <Container>
                {isActive === true && (
                    <CloseContainer>
                        <Close onClick={() => closeWork()}>
                            <AiOutlineCloseCircle />
                        </Close>
                    </CloseContainer>
                )}
                <Header>
                    <Phone className="phone">
                        <PhoneImage src={phoneImage} />
                        <PhoneContent src={websiteUrl} />
                    </Phone>
                    <Intro className="intro">
                        {isActive === true && (
                            <IntroHeader>
                                <IntroHeaderPost>{t(work.post)}</IntroHeaderPost>
                                <IntroHeaderCompanyName>{work.companyName}</IntroHeaderCompanyName>
                            </IntroHeader>
                        )}
                        <IntroText>
                            <Card>{t(`works.${work.translationKey}.tagline` as ResourceKey)}</Card>
                        </IntroText>
                        <Button
                            hasArrow
                            externalPath={websiteUrl}
                            // onClick={() => viewWork()}
                        >
                            {t('home.works.cta')}
                        </Button>
                    </Intro>
                </Header>

                {isActive === true && (
                    <Content>
                        {/* TODO Add projects content and enable view work */}
                        <Title>&nbsp;</Title>
                    </Content>
                )}
            </Container>
        </Wrapper>
    );
};

export default HomeWorksDesktopItem;
