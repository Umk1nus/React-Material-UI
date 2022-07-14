import { Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <Toolbar mt={5}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ©{new Date().getFullYear()}
      </Typography>
    </Toolbar>
  )
}

export {Footer}