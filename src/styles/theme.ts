import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        yellow: {
            "400": "#FFBA08",
            "350": "rgba(255, 186, 8, 0.5)"
        },
        gray: {
            "900": "#000000",
            "600": "#47585B",
            "500": "#999999",
            "200": "#DADADA",
            "100": "#F5F8FA",
            "50": "#FFFFFF"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50'
            }
        }
    }
})