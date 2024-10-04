export enum Breakpoints {
    DESKTOP = 1024,
    TABLET = 768,
    MOBILE = 480,
}

export const breakpoints = {
    desktop: `@media (min-width: ${Breakpoints.DESKTOP}px)`, // At least 1024px
    tablet: `@media  (max-width: ${Breakpoints.DESKTOP}px)`, // Below 1024px
    midsize: `@media (max-width: ${Breakpoints.TABLET}px)`, // Below 768px
    mobile: `@media (max-width: ${Breakpoints.MOBILE}px)`, // Below 480px
};
