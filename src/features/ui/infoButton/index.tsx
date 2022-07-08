import React from 'react'
import { default as MuiInfoIcon } from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

export default function InfoIcon({ tooltip }: InfoIconProps) {
    return (
        <Box p={2}>
            <Tooltip title={tooltip}>
                <MuiInfoIcon color="primary" />
            </Tooltip>
        </Box>
    )
}
