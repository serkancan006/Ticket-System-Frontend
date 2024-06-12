import React, { useEffect, useState } from 'react'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material'

interface role {
  id: number
  roleName: string
  checked: boolean
}

interface UserRoleDialog {
  closeDialog: (result: string) => void
  orderState?: any // Eğer `orderState` objesinin daha belirgin bir yapısı varsa, buna göre güncelleyin.
}

const roles: role[] = [
  { id: 1, roleName: 'Root', checked: true },
  { id: 2, roleName: 'Admin', checked: true },
  { id: 3, roleName: 'Destek', checked: false },
  { id: 4, roleName: 'Moderatör', checked: false }
]

export const UserRoleDialog: React.FC<UserRoleDialog> = ({ closeDialog }) => {
  const [rolesData, setRolesData] = useState<role[]>([])

  useEffect(() => {
    setRolesData(roles)
  }, [])

  function handleAssignRole() {
    alert('role atandı')
  }

  return (
    <>
      <DialogTitle>Rol Atama</DialogTitle>
      <DialogContent>
        <p>Kullanıcıya atamak istediğiniz rolleri seçiniz.</p>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
            <FormLabel component='legend'>Roller</FormLabel>
            <FormGroup>
              {rolesData.map(roleData => (
                <FormControlLabel
                  key={roleData.id}
                  control={<Checkbox checked={roleData.checked} />}
                  label={roleData.roleName}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAssignRole}>Rol Ata</Button>
        <Button color='error' onClick={() => closeDialog('No')}>
          Kapat
        </Button>
      </DialogActions>
    </>
  )
}
