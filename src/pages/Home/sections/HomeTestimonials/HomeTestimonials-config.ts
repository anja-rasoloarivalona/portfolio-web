import { ResourceKey } from 'i18next';

export type TestimonialType = {
    id: string;
    author: string;
    post: ResourceKey;
    date: Date;
};

export const list: Array<TestimonialType> = [
    {
        id: '1',
        author: 'Benjamin',
        post: 'cto',
        date: new Date('2024-02-29'),
    },
    {
        id: '2',
        author: 'Georges',
        post: 'developer',
        date: new Date('2023-09-22'),
    },
    {
        id: '3',
        author: 'Cyrielle',
        post: 'developer',
        date: new Date('2023-06-26'),
    },
    {
        id: '4',
        author: 'Benjamin',
        post: 'cto',
        date: new Date('2023-04-28'),
    },
    {
        id: '5',
        author: 'Fleur',
        post: 'developer',
        date: new Date('2024-06-21'),
    },
];
