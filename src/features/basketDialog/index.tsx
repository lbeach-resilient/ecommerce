import Dialog from '@mui/material/Dialog'
import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function BasketDialog({ open, onClose, rows }: BasketDialogProps) {
    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'price', headerName: 'Price', width: 150 },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 150
        }
    ]

    console.log(rows)

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth={'lg'}>
            <Paper sx={{ height: '50vh' }}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        autoHeight
                    />
                </div>
                <Box
                    px={2}
                    sx={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button variant="contained">delete</Button>
                    <Button variant="contained">Checkout</Button>
                </Box>
            </Paper>
        </Dialog>
    )
}
