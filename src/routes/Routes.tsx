import React from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages';

const AppRoutes = () =>
    useRoutes([
        {
            element: <HomePage />,
            path: '*',
        },
    ]);

export { AppRoutes };
