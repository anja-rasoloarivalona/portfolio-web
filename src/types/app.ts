import React from 'react';

export type AppContextType = {
    hash: string;
    scrollOnHashChange: boolean;
    setScrollOnHashChange: React.Dispatch<React.SetStateAction<boolean>>;
    watchSectionVisibility: boolean;
    setWatchSectionVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
