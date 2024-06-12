import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { openDialog, closeDialog, renderDialog } from '../services/DialogService'

interface DialogContextProps {
  openDialog: (component: React.FC<any>, data: any, afterClosed?: (result: any) => void) => void
  closeDialog: (result: any) => void
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined)

interface DialogProviderProps {
  children: ReactNode
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialogState, setDialogState] = useState<{
    open: boolean
    component: React.FC<any> | null
    data: any
    afterClosed: ((result: any) => void) | null
  }>({
    open: false,
    component: null,
    data: null,
    afterClosed: null
  })

  const openDialogHandler = useCallback((component: React.FC<any>, data: any, afterClosed?: (result: any) => void) => {
    openDialog(setDialogState, component, data, afterClosed)
  }, [])

  const closeDialogHandler = useCallback(
    (result: any) => {
      closeDialog(setDialogState, dialogState, result)
    },
    [dialogState]
  )

  return (
    <DialogContext.Provider value={{ openDialog: openDialogHandler, closeDialog: closeDialogHandler }}>
      {children}
      {renderDialog(dialogState, closeDialogHandler)}
    </DialogContext.Provider>
  )
}

export const useDialog = (): DialogContextProps => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

