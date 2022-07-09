import { Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ©{new Date().getFullYear()}
      </Typography>
    </Toolbar>
  )
}

export {Footer}