import Box from '@mui/material/Box'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
    return (
        <Box>
            <div>
                <Link to="/all-products">All Products</Link>
            </div>
        </Box>
    )
}
