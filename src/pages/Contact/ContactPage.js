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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Card, Container, Stack, Grid, Paper, TextField, Tooltip } from '@mui/material';
import { styled } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

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
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    mobile: false,
    email: false,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (value.trim() !== '') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      mobile: formData.mobile.trim() === '',
      email: formData.email.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSendMessage = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://127.0.0.1:7000/createdata', formData);
        console.log(response.data);
        setIsFormSubmitted(true);
      } catch (error) {
        console.error(error);
        setIsFormSubmitted(false);
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} className="link-no-decoration">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const isLargeScreen = useMediaQuery('(min-width:600px)');

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
            {/* Icon for mobile menu */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id}>
                <Link to={`/${item.id}`} style={{ textDecoration: 'none', color: 'white', textTransform: 'capitalize' }}>
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
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container sx={{ mt: 15 }}>
        <Typography className="quote" variant="h3" sx={{ textAlign: 'center', marginLeft: isLargeScreen ? 35 : 0 }}>
          Take A Tea & Chat With Me!
        </Typography>
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Item>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography fontSize={50}> 💌 </Typography>
                <Typography marginLeft={1}>96ametavijay@gmail.com</Typography>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography fontSize={50}> 📱 </Typography>
                <Typography marginLeft={1}>+91-8209220877</Typography>
              </Stack>
            </Item>
          </Grid>
        </Grid>
        {!isFormSubmitted && (
          <Box sx={{ mt: 3, maxWidth: '100%', mx: 'auto', px: { xs: 1, md: 0 } }}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              name="mobile"
              label="Mobile"
              variant="outlined"
              fullWidth
              value={formData.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
              helperText={errors.mobile ? 'Mobile number is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              helperText={errors.email ? 'Email is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              error={errors.message}
              helperText={errors.message ? 'Message is required' : ''}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                display: 'block',
                mx: 'auto',
                textTransform: 'initial',
                mt: 2,
                mb: 5,
                fontSize: '0.875rem',
                padding: '8px 16px',
              }}
              onClick={handleSendMessage}
            >
              Send Message
            </Button>
          </Box>
        )}
        {isFormSubmitted && (
          <Box sx={{ my: 2, textAlign: 'center' }}>
            <Typography variant="body1" color="success.main">
              Form submitted successfully!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
