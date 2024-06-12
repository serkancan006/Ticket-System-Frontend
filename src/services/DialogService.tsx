import React from 'react'
import { Dialog, Slide } from '@mui/material'

interface DialogState {
  open: boolean
  component: React.FC<any> | null
  data: any
  afterClosed: ((result: any) => void) | null
}

export const openDialog = (
  setDialogState: React.Dispatch<React.SetStateAction<DialogState>>,
  component: React.FC<any>,
  data: any,
  afterClosed?: (result: any) => void
) => {
  setDialogState({
    open: true,
    component,
    data,
    afterClosed: afterClosed || null
  })
}

export const closeDialog = (
  setDialogState: React.Dispatch<React.SetStateAction<DialogState>>,
  prevState: DialogState,
  result: any
) => {
  if (prevState.afterClosed) {
    prevState.afterClosed(result)
  }
  setDialogState({
    open: false,
    component: null,
    data: null,
    afterClosed: null
  })
}

export const renderDialog = (dialogState: DialogState, closeDialog: (result: any) => void) => (
  <Dialog
    open={dialogState.open}
    onClose={() => closeDialog(null)}
    fullWidth
    maxWidth={'md'}
    TransitionComponent={Slide}
    keepMounted

    //style={{ backgroundColor: 'darkgrey', padding: '0px', width: '1200px' }}
  >
    {dialogState.component && React.createElement(dialogState.component, { closeDialog, ...dialogState.data })}
  </Dialog>
)

// export const renderDialog = (
//   dialogState: DialogState,
//   closeDialog: (result: any) => void,
//   setDialogState: React.Dispatch<React.SetStateAction<DialogState>>
// ) => (
//   <Dialog open={dialogState.open} onClose={() => closeDialog(setDialogState, dialogState, null)}>
//     {dialogState.component && React.createElement(dialogState.component, { closeDialog, ...dialogState.data })}
//   </Dialog>
// )
