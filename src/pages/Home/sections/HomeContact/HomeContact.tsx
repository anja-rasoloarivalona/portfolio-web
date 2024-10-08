import React, { useRef, useState } from 'react';
import { Button, ButtonLink, ButtonLinkTypes, PageSection, Title } from '../../../../components';
import {
    Container,
    Intro,
    IntroTitle,
    IntroText,
    Content,
    Info,
    ButtonLinks,
    Form,
    FormFooter,
    FormGroup,
    FormGroupInput,
    FormGroupLabel,
    FormGroupTextarea,
    ErrorBanner,
    ErrorBannerMessage,
    InfoItem,
    InfoItemIcon,
    InfoItemText,
    FormTitle,
    AnimationContainer,
    AnimationMessage,
} from './HomeContact-styles';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { Routes } from '../../../../routes';
import animation from '../../../../assets/form-animation.lottie';
import '@dotlottie/player-component';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { sendEmail } from '../../../../utils';

enum FormState {
    FILLING,
    SENDING,
    SENT,
}

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

const HomeContact = () => {
    const { t } = useTranslation();
    const lottieRef = useRef<any>(null);
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState<null | ResourceKey>(null);
    const [formState, setFormState] = useState(FormState.FILLING);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            if (formState === FormState.SENDING) {
                return;
            }

            event.preventDefault();
            setErrorMessage(null);
            if (formData.message === '') {
                setErrorMessage('home.contact.form.error.message_required');
                return;
            }

            if (formData.email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) !== true) {
                setErrorMessage('home.contact.form.error.invalid_email');
                return;
            }

            setFormState(FormState.SENDING);
            await sendEmail(`${formData.firstName} ${formData.lastName}`, formData.email, formData.message);
            setFormState(FormState.SENT);

            setTimeout(() => {
                lottieRef.current.seek(0);
                lottieRef.current.play();
            }, 100);

            setTimeout(() => {
                setFormData(initialFormData);
                setFormState(FormState.FILLING);
            }, 2000);
        } catch (err) {
            setErrorMessage('home.contact.form.error.generic');
            setFormState(FormState.FILLING);
        }
    };

    const infos = [
        {
            Icon: BiLogoGmail,
            text: 'rasoloanja@gmail.com',
        },
        {
            Icon: FaPhone,
            text: '+1 438 540 3433',
        },
        {
            Icon: FaLocationDot,
            text: 'Montreal, QC Canada',
        },
    ];

    return (
        <PageSection id={Routes.CONTACT}>
            <Title>{t('home.contact.title')}</Title>
            <Container>
                <Intro>
                    <IntroTitle>{t('home.contact.intro.title')}</IntroTitle>
                    <IntroText>{t('home.contact.intro.text')}</IntroText>
                </Intro>

                <Content isDisplayed={formState === FormState.FILLING}>
                    <Info>
                        {infos.map(({ Icon, text }, index) => (
                            <InfoItem key={index}>
                                <InfoItemIcon>
                                    <Icon />
                                </InfoItemIcon>
                                <InfoItemText>{text}</InfoItemText>
                            </InfoItem>
                        ))}
                    </Info>
                    <ButtonLinks>
                        <ButtonLink type={ButtonLinkTypes.BITBUCKET} />
                        <ButtonLink type={ButtonLinkTypes.LINKEDIN} />
                        <ButtonLink type={ButtonLinkTypes.CV} />
                        <ButtonLink type={ButtonLinkTypes.GITHUB} />
                        <ButtonLink type={ButtonLinkTypes.EMAIL} />
                    </ButtonLinks>
                    <Form onSubmit={handleSubmit} noValidate>
                        <FormTitle>{t('home.contact.form.title')}</FormTitle>
                        {errorMessage != null && (
                            <ErrorBanner>
                                <ErrorBannerMessage>{t(errorMessage)}</ErrorBannerMessage>
                                <AiOutlineClose onClick={() => setErrorMessage(null)} />
                            </ErrorBanner>
                        )}
                        <FormGroup>
                            <FormGroupLabel>{t('generic.last_name')}</FormGroupLabel>
                            <FormGroupInput
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormGroupLabel>{t('generic.first_name')}</FormGroupLabel>
                            <FormGroupInput
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup isExpanded>
                            <FormGroupLabel>{t('generic.email')}</FormGroupLabel>
                            <FormGroupInput
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup isExpanded>
                            <FormGroupLabel>
                                {t('generic.message')} <span className="required">*</span>
                            </FormGroupLabel>
                            <FormGroupTextarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormFooter>
                            <Button
                                type="submit"
                                leadingIcon={<AiOutlineSend />}
                                isLoading={formState === FormState.SENDING}
                                isExpanded
                            >
                                {t('home.contact.form.cta')}
                            </Button>
                        </FormFooter>
                    </Form>
                </Content>

                <AnimationContainer isDisplayed={formState !== FormState.FILLING}>
                    <dotlottie-player
                        ref={lottieRef}
                        src={animation}
                        style={{ height: '15rem', width: '15rem' }}
                    />
                    <AnimationMessage>{t('home.contact.form.success')}</AnimationMessage>
                </AnimationContainer>
            </Container>
        </PageSection>
    );
};

export default HomeContact;
