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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Portfolio
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id}>
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

  const [experience, setExperience] = React.useState([]);

  React.useEffect(() => {
    const getExperienceData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-pi-silk.vercel.app/experience');
        setExperience(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExperienceData();
  }, []);

  return (
    <Box>
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
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'flex', sm: 'none' }, marginLeft: 1, color: 'white' }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, color: 'white' }}
            >
              Portfolio
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} className="link-no-decoration">
                <Link to={`/${item.name}`} style={{ textDecoration: 'none', textTransform: 'initial', color: 'white' }}>
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
          {/* Responsive Grid for Skills */}
          <Grid container spacing={4} justifyContent="center">
            {[
              { alt: 'HTML5', src: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png' },
              { alt: 'CSS3', src: 'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png' },
              { alt: 'JavaScript', src: 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png' },
              { alt: 'Material UI', src: 'https://mui.com/static/logo.png' },
              { alt: 'React', src: 'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png' },
              { alt: 'NodeJS', src: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' },
              { alt: 'Azure', src: 'https://cdn.shortpixel.ai/spai/q_lossy+w_949+to_webp+ret_img/http://algotrading101.com/learn/wp-content/uploads/2022/09/Microsoft-Azure-Logo.png' },
              { alt: 'Kubernetes', src: 'https://i1.wp.com/mlinproduction.com/wp-content/uploads/2019/04/kubernetes_logo.png?fit=730%2C389&ssl=1' },
            ].map((skill, index) => (
              <Grid item xs={6} sm={4} md={2} key={index} display="flex" justifyContent="center" alignItems="center">
                <Avatar sx={{ height: 80, width: 80 }} alt={skill.alt} src={skill.src} />
              </Grid>
            ))}
          </Grid>


          {/* Experience Data */}
          {experience.map((item) =>
            item.experience.map((exp) => (
              <Container key={exp._id} sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                  {exp.date.start} - {exp.date.end}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {exp.position} - {exp.company}
                </Typography>
                <Typography sx={{ maxWidth: '50%', margin: 'auto' }}>
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
