import { IconType } from 'react-icons';
import cv from '../../assets/Anja Rasoloarivalona - CV.pdf';

// icons
import { IoLogoBitbucket } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

export enum ButtonLinkTypes {
    BITBUCKET = 'bitbucket',
    GITHUB = 'github',
    LINKEDIN = 'linkedin',
    EMAIL = 'email',
    CV = 'cv',
}

export const lists: Record<ButtonLinkTypes, { label: string; Icon: IconType; path: string }> = {
    [ButtonLinkTypes.BITBUCKET]: {
        label: 'Bitbucket',
        Icon: IoLogoBitbucket,
        path: 'https://bitbucket.org/anjanirina/workspace/projects',
    },
    [ButtonLinkTypes.GITHUB]: {
        label: 'Github',
        Icon: BsGithub,
        path: 'https://github.com/anja-rasoloarivalona',
    },
    [ButtonLinkTypes.LINKEDIN]: {
        label: 'LinkedIn',
        Icon: FaLinkedinIn,
        path: 'https://linkedin.com/in/anja-rasoloarivalona',
    },
    [ButtonLinkTypes.EMAIL]: {
        label: 'Email: rasoloanja@gmail.com',
        Icon: BiLogoGmail,
        path: 'mailto:rasoloanja@gmail.com',
    },
    [ButtonLinkTypes.CV]: {
        label: 'Curriculum Vitae',
        Icon: HiDocumentText,
        path: cv,
    },
};
