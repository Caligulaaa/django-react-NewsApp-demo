import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../utils/context'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Navbar = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('authToken')
  }
  return (
  <div className='navbar'>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">

      <Toolbar>
      <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Caligula
      </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
        <Box
          sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
            },
          }}
          >
          <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to='/news' style={{textDecoration:'none',color:'white'}}>News</Link>
          </Box>
        </Typography>
        <Box
          sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'right',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
            },
          }}
          >
        {isAuth ? (
          <button onClick={logout}>logout</button>
        ):(
          <Link to='/login' style={{textDecoration:'none',color:'white'}}>login</Link>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}

export default Navbar





