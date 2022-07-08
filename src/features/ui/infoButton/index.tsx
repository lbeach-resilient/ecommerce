import IconButton from '@mui/material/IconButton'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'

export default function InfoButton({ title, onClick, tooltip }: InfoButtonProps) {
    return (
        <Tooltip title={tooltip}>
            <IconButton aria-label={`info about ${title}`} onClick={onClick}>
                <InfoIcon color="primary" />
            </IconButton>
        </Tooltip>
    )
}
