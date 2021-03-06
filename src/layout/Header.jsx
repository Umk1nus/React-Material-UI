import { Toolbar, Box, AppBar, Typography, IconButton, TextField} from "@mui/material";
import {Link} from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SPA React
          </Typography>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" color="warning"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export {Header};