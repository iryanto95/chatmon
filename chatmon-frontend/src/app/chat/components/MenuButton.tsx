import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import { 
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

const MenuButton = () => {
  const router  = useRouter()
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)

  return (
    <Button
      variant='contained'
      sx={{
        position: 'absolute',
        top:   '32px',
        left:  '32px',
        width: '36px', 
        backgroundColor: 'rgb(100,150,255)'
      }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(anchorEl ? null : e.currentTarget)}
      >
      <MenuIcon/>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical:   'top',
          horizontal: 'right',
        }}
      >
        <MenuItem 
          sx={{color: 'red'}}
          onClick={() => {
            setAnchorEl(null)
            axios.post(  `${process.env.NEXT_PUBLIC_BACKEND_API}/user/logout`, {}, { withCredentials: true })
            return router.push('/login')
          }}>
          Logout
        </MenuItem>
      </Menu>
    </Button>
  )
}

export default MenuButton