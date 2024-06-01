//https://notistack.com/
import { SnackbarProvider, VariantType, closeSnackbar, enqueueSnackbar } from 'notistack'
import { CloseCircle } from 'mdi-material-ui'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function NotistackService({ children }: Props) {
  return (
    <SnackbarProvider
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      maxSnack={5}
      action={id => <CloseCircle style={{ cursor: 'pointer' }} onClick={() => closeSnackbar(id)} />}
    >
      {children}
    </SnackbarProvider>
  )
}

export function showNotifyStack(message: string, variant: VariantType) {
  // const snackbarId = enqueueSnackbar('No connection!', {
  //   variant: 'error',
  //   persist: true
  // })
  enqueueSnackbar(message, { variant: variant })
}

export function closeAllNotifyStack() {
  closeSnackbar()
}
