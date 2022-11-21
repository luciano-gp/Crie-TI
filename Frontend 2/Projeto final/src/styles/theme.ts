import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            900: '#181b23',
        }
    },
    styles: {
        global: {
            fonts: {
                heading: 'Roboto',
                body: 'Roboto',
            },
            body: {
                bg: 'gray.900',
                color: 'gray.50',
            }
        }
    }
});