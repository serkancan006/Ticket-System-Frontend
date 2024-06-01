import { Button, IconButton } from '@mui/material'
import { Snackbar } from '@mui/material'
import { CloseCircleOutline } from 'mdi-material-ui'
import React from 'react'

const CustomSnackbar = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const action = (
    <React.Fragment>
      <Button color='secondary' size='small' onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <CloseCircleOutline fontSize='small' />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message='Note archived' action={action} />
    </div>
  )
}

export default CustomSnackbar
