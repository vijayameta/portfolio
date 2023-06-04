import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Card, Container, Stack } from '@mui/material';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';



const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

console.log(navItems)


const listItems = document.getElementsByClassName("link-no-decoration");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.textDecoration = "none";
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSendMessage = () => {
    axios
      .post('http://localhost:4002/api/v1/students', formData)
      .then(function (response) {
        console.log(response.data);
        // Handle the response as needed
        setIsFormSubmitted(true);
      })
      .catch(function (error) {
        console.log(error);
        // Handle the error as needed
        setIsFormSubmitted(false);
      });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Porfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} className="link-no-decoration">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.id}`} >
                <ListItemText primary={item.name} sx={{ textDecoration: 'none' }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Porfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} className="link-no-decoration">
                <Link to={`/${item.name}`} style={{ textDecoration: "none", textTransform: "initial", color: "white" }}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
      </Box>
      <Container>
        <Typography variant='h3' marginTop={15} marginLeft={32}>Take A Tea & Chat With Me!</Typography>
        <Grid container spacing={10} justifyContent={'center'} sx={{ mt: '-40px' }}>
          <Grid item xs={6} md={4}>
            <Item>
              <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Typography fontSize={50}> 💌 </Typography>
                <Typography color={'black'} marginTop={3}>96ametavijay@gmail.com</Typography>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Typography fontSize={50}> &#128241; </Typography>
                <Typography color={'black'} marginTop={3}>+91-8209220877</Typography>
              </Stack>
            </Item>
          </Grid>
        </Grid>
        {!isFormSubmitted && (   <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, width: '130vh', ml: 26 }}>
          <TextField id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange} sx={{ mb: 2 }} />
          <TextField id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            value={formData.phone}
            onChange={handleInputChange} sx={{ mb: 2 }} />
          <TextField id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange} sx={{ mb: 2 }} />
          <TextField id="message"
            name="message"
            label="Message"
            variant="outlined"
            sx={{ mb: 2 }} value={formData.message} onChange={handleInputChange} />
        </Box>
        )}
        {!isFormSubmitted && ( <Button variant="contained" sx={{ ml: 70, textTransform: 'initial', mb: 5 }} onClick={handleSendMessage}>Send Message</Button>
        )}
         {isFormSubmitted && (
  <Box sx={{ my: 2 }}>
    <Typography variant="body1" color="white" bgcolor={"green"} display={"inline-block"} sx={{ml: 60}}>Form submitted successfully!</Typography>
  </Box>
)}


      </Container>
    </Box>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
