import { ResourceKey } from 'i18next';

export enum WorkId {
    BIZBIZSHARE = 'BIZBIZSHARE',
    MPHASE = 'MPHASE',
    NAIA = 'NAIA',
}

export type Work = {
    id: WorkId;
    companyName: string;
    post: ResourceKey;
    translationKey: ResourceKey;
    path: string;
    image: string;
    websiteUrl: string;
};
