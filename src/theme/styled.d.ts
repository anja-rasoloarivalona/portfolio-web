import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        box: {
            spacing: {
                xxxl: string;
                xxl: string;
                xl: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
                xxs: string;
            };
            shadow: {
                main: string;
                secondary: string;
            };
        };
        colors: {
            darkBlue: string;
            blue: string;
            lightBlue: string;
            brightBlue: string;
            darkGrey: string;
            grey: string;
            lightGrey: string;
            brightGrey: string;
            white: string;
            green: string;
            darkGreen: string;
            greenTransparent: string;
            red: string;
            redTransparent: string;
        };
        config: {
            header: {
                height: {
                    default: number;
                };
            };
        };
        font: {
            size: {
                xxl: string;
                xl: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
                xxs: string;
            };
            weight: {
                bold: string;
                semiBold: string;
                normal: string;
            };
        };
        breakpoints: {
            desktop: string;
            tablet: string;
            midsize: string;
            mobile: string;
        };
    }
}
