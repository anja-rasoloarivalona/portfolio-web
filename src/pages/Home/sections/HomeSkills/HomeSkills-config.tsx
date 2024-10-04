import React from 'react';
import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaVuejs,
    FaSass,
    FaGitAlt,
    FaGithub,
    FaAngular,
    FaGitlab,
    FaBitbucket,
    FaDocker,
    FaJira,
    FaSourcetree,
} from 'react-icons/fa';
import { SiTypescript, SiPostman } from 'react-icons/si';
import { BiLogoJquery } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiElasticsearch } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiMocha } from 'react-icons/si';
import { SiHeroku } from 'react-icons/si';

export const skills = [
    {
        text: 'JavaScript',
        Icon: FaJsSquare,
    },
    {
        text: 'Typescript',
        Icon: SiTypescript,
    },
    {
        text: 'React',
        Icon: FaReact,
    },
    {
        text: 'Vue',
        Icon: FaVuejs,
    },
    {
        text: 'Angular',
        Icon: FaAngular,
    },
    {
        text: 'HTML5',
        Icon: FaHtml5,
    },
    {
        text: 'CSS3',
        Icon: FaCss3Alt,
    },
    {
        text: 'Sass',
        Icon: FaSass,
    },
    {
        text: 'jQuery',
        Icon: BiLogoJquery,
    },
    {
        text: 'NodeJS',
        Icon: FaNodeJs,
    },
    {
        text: 'MySQL',
        Icon: SiMysql,
    },
    {
        text: 'MongoDB',
        Icon: SiMongodb,
    },
    {
        text: 'GraphQL',
        Icon: SiGraphql,
    },
    {
        text: 'Elastic Search',
        Icon: SiElasticsearch,
    },
    {
        text: 'Jest',
        Icon: SiJest,
    },
    {
        text: 'Mocha',
        Icon: SiMocha,
    },
    {
        text: 'Postman',
        Icon: SiPostman,
    },
    {
        text: 'Heroku',
        Icon: SiHeroku,
    },
    {
        text: 'Git',
        Icon: FaGitAlt,
    },
    {
        text: 'Gitlab',
        Icon: FaGitlab,
    },
    {
        text: 'GitHub',
        Icon: FaGithub,
    },
    {
        text: 'Bitbucket',
        Icon: FaBitbucket,
    },
    {
        text: 'Docker',
        Icon: FaDocker,
    },
    {
        text: 'Jira',
        Icon: FaJira,
    },
    {
        text: 'SourceTree',
        Icon: FaSourcetree,
    },
];

/**
 * Render icon
 * @param icon
 * @return {JSX}
 */
export const renderIcon = (icon: string) => {
    const config = skills.find((skill) => skill.text.toLowerCase() === icon.toLowerCase());
    if (config == null) {
        return <React.Fragment />;
    } else {
        const { Icon } = config;
        return <Icon />;
    }
};
