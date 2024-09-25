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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
              <Link to={`/${item.id}`}>
                <ListItemText primary={item.name} sx={{ textDecoration: 'none' }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [experience, setExperience] = React.useState([]);

  React.useEffect(() => {
    const getExperienceData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:7000/experience');
        setExperience(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExperienceData();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            <MenuIcon />
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
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>

      <Typography variant="h3" textAlign="center" fontFamily="cursive">
        Skills & Experience
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Container>
          {/* Responsive Grid for Skills */}
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="HTML5" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="CSS3" src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="JavaScript" src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="Material UI" src="https://mui.com/static/logo.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="React" src="https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="NodeJS" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvPGY8Y9lklAYF0Nemx3spcoDQeb4K6NSZugZKts&s" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="Travis Howard" src="https://cdn.shortpixel.ai/spai/q_lossy+w_949+to_webp+ret_img/http://algotrading101.com/learn/wp-content/uploads/2022/09/Microsoft-Azure-Logo.png" />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Avatar sx={{ height: 80, width: 80 }} alt="Cindy Baker" src="https://i1.wp.com/mlinproduction.com/wp-content/uploads/2019/04/kubernetes_logo.png?fit=730%2C389&ssl=1" />
            </Grid>
          </Grid>

          {/* Experience Data */}
          {experience.map((item) =>
            item.experience.map((exp) => (
              <Container key={exp._id} sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }} fontFamily="cursive">
                  {exp.date.start} - {exp.date.end}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} fontFamily="cursive">
                  {exp.position} - {exp.company}
                </Typography>
                <Typography sx={{ maxWidth: '50%', margin: 'auto' }} fontFamily="cursive">
                  <strong>Skills:</strong> {exp.skills.join(', ')}
                </Typography>
              </Container>

            ))
          )}
        </Container>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
