import { Work, WorkId } from '../types';

import bizbizshareImage from '../assets/bizbizshare.png';
import mphaseImage from '../assets/mphase.png';
import naiaImage from '../assets/naia.png';

export const works: Map<WorkId, Work> = new Map([
    [
        WorkId.NAIA,
        {
            id: WorkId.NAIA,
            post: 'generic.full_stack_developer',
            companyName: 'NAIA',
            translationKey: 'naia',
            path: '',
            image: naiaImage,
            websiteUrl: 'https://staging-naia-web-91d64945f832.herokuapp.com',
        },
    ],
    [
        WorkId.MPHASE,
        {
            id: WorkId.MPHASE,
            post: 'generic.full_stack_developer',
            companyName: 'mPhase',
            translationKey: 'mphase',
            path: WorkId.MPHASE,
            image: mphaseImage,
            websiteUrl: 'https://mphase.ca',
        },
    ],
    [
        WorkId.BIZBIZSHARE,
        {
            id: WorkId.BIZBIZSHARE,
            post: 'generic.full_stack_developer',
            companyName: 'BizbizShare',
            translationKey: 'bizbizshare',
            path: '',
            image: bizbizshareImage,
            websiteUrl: 'https://bizbizshare.com',
        },
    ],
]);
