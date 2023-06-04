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
import { Container, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';


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

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            <ListItemButton sx={{ textAlign: 'center', textDecoration: 'none' }}>
              <Link to={`/${item.id}`} >
                <ListItemText primary={item.name} />
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
            <MenuIcon />
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
              <Link to={`/${item.name}`} style={{textDecoration: "none", textTransform: "initial", color: "white"}}>
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
      <Box sx={{ml: 30}}>
      <Typography variant='h3' marginTop={13} marginLeft={33} fontFamily={"cursive"}>Skills & Experience</Typography>
       <Stack direction="row" spacing={5} sx={{mt: 5,mr: 3,}}>
      <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Travis Howard" src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Cindy Baker" src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" />
    </Stack>
       <Stack direction="row" spacing={5} sx={{mt: 2,mr: 3,}}>
      <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src="https://mui.com/static/logo.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Travis Howard" src="https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33" />
      <Avatar sx={{height: 80, width: 80}} alt="Cindy Baker" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
    </Stack>
    <Stack direction="row" spacing={5} sx={{mt: 2}}>
      <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Travis Howard" src="https://w7.pngwing.com/pngs/500/498/png-transparent-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-computer-programming-thumbnail.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Cindy Baker" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
    </Stack>
    <Stack direction="row" spacing={5} sx={{mt: 2,mr: 3,}}>
      <Avatar sx={{height: 80, width: 80}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvPGY8Y9lklAYF0Nemx3spcoDQeb4K6NSZugZKts&s" />
      <Avatar sx={{height: 80, width: 80}} alt="Travis Howard" src="https://cdn.shortpixel.ai/spai/q_lossy+w_949+to_webp+ret_img/http://algotrading101.com/learn/wp-content/uploads/2022/09/Microsoft-Azure-Logo.png" />
      <Avatar sx={{height: 80, width: 80}} alt="Cindy Baker" src="https://i1.wp.com/mlinproduction.com/wp-content/uploads/2019/04/kubernetes_logo.png?fit=730%2C389&ssl=1" />
    </Stack>
    <Box sx={{display: "flex", flexDirection: "column", position: "relative", bottom: 300, left: 400 }}>
    <Typography variant= "h6" sx={{ mt: 1, fontWeight: 'bold' }} fontFamily={"cursive"}>Nov 2022 - May 2023</Typography>
    <Typography variant= "h6" sx={{  fontWeight: 'bold' }} fontFamily={"cursive"}>Full Stack Developer - Lentra.ai</Typography>
    <Typography fontFamily={"cursive"}>Skills:- HTML,CSS,JavaScript,mui,ReactJS</Typography>
    <Typography sx={{ml: 7}} fontFamily={"cursive"}>NodeJs, PostgresSql, API integration</Typography>
    <Typography sx={{ml: 7}} fontFamily={"cursive"}>Git, BitBucket, Azure, Kubernetes</Typography>
    </Box>
      </Box>
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
