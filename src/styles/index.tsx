import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2'
        },
        secondary: {
            main: 'rgb(220, 0, 78)'
        },
        background: {
            default: '#fff',
            paper: '#fff'
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9'
        },
        secondary: {
            main: '#f48fb1'
        },
        background: {
            default: '#212121',
            paper: '#424242'
        }
    }
})
