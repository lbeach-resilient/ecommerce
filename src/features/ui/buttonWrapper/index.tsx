import ButtonBase from '@mui/material/ButtonBase'
import React from 'react'

export default function ButtonWrapper({ children, onClick }: ButtonWrapperProps) {
    return <ButtonBase onClick={onClick}>{children}</ButtonBase>
}
