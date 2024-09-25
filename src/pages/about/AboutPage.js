import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  CssBaseline,
  Button,
  Tooltip,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { StyledTypography } from './AnboutPageStyle';
import axios from 'axios';

export default function AboutPage() {
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
          <Link>
            Porfolio
          </Link>
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to={`/${item.id}`}>
                  <ListItemText sx={{ textDecoration: 'none' }} primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box >
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
      </Box>
    );
  }

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:7000/data');
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log the error for debugging
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DrawerAppBar />
      <DrawerAppBar />
      <Box component="main" sx={{ display: "flex", flexDirection: "column", }}>
        <Container>
          <Box className="quote" sx={{ mt: 10, display: "flow" }}>
            <Typography variant="h4" textAlign="center">
              I Know With Good Development
            </Typography>
            <Typography variant="h4" textAlign="center">
              Comes Great Responsibility
            </Typography>
          </Box>

          <Container sx={{ width: "100vw", display: "flex", mt: 5 }}>
            {data.map((el) => (
              <Card key={el._id} className='cardAlignment'> {/* Use unique identifier here */}
                <CardActionArea>
                  <CardMedia
                    sx={{ borderRadius: '20px' }}
                    component="img"
                    height="140"
                    image={el.image}
                    alt={el.title} // Add alt for accessibility
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.techStack}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {el.title}:
                      <Tooltip title={el.tooltip}>
                        <StyledTypography fontSize={14}>
                          {el.description.slice(0, 100)}<strong>...</strong>
                        </StyledTypography>
                      </Tooltip>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}

          </Container>
        </Container>
      </Box>
    </Box>
  );
}
