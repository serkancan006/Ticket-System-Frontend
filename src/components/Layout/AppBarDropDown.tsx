import React, { useState } from 'react'
import { Button, MenuItem, Menu } from '@mui/material'

const AppBarDropDown = () => {
  // Initialize with default value
  const [companyName, setCompanyName] = useState('A Firması')
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = e => {
    setCompanyName(e.target.textContent || companyName)
    setAnchorEl(null)
  }

  return (
    <div>
      <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        {companyName}
      </Button>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>A Firması</MenuItem>
        <MenuItem onClick={handleClose}>B Firması</MenuItem>
        <MenuItem onClick={handleClose}>C Firması</MenuItem>
      </Menu>
    </div>
  )
}

export default AppBarDropDown
