import React from 'react';
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
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

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
          Porfolio
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DrawerAppBar />
      <DrawerAppBar />
      <Box component="main" sx={{display: "flex",  flexDirection: "column"}}>
        <Container>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h4" textAlign="center">
              I Know With Good Development
            </Typography>
            <Typography variant="h4" textAlign="center">
              Comes Great Responsibility
            </Typography>
          </Box>

        <Container sx={{ display: 'flex', mt: 4 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ paddingLeft: 4 }}>
              <CardMedia
                sx={{ borderRadius: '20px' }}
                component="img"
                height="140"
                image="https://trainings.internshala.com/cached_uploads/full-stack-web-development-specialization/banner_hero.png"
                alt="full stack"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Full Stack Developer
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Frontend Development:
                  <Typography fontSize={14}>
                    As a full stack developer, I excel in HTML/CSS, JavaScript, React, and Material UI to create visually appealing and responsive interfaces. With expertise in frontend development and UI/UX design, I deliver high-quality web applications.
                  </Typography>
                  <Typography variant='h6'>
                    Backend Development:
                  </Typography>
                  <Typography fontSize={14}>
                    As a full stack developer, I use Node.js to build server-side applications, specializing in API development and database integration with PostgresSQL for efficient data management.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ paddingLeft: 4 }}>
              <CardMedia
                sx={{ borderRadius: '20px' }}
                component="img"
                height="140"
                image="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1275224/cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"
                alt="Node.js"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Node.js Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As a Node.js developer, I specialize in building robust and scalable server-side applications and APIs. Leveraging Node.js's event-driven, non-blocking I/O model, I efficiently handle concurrent connections. Using Express.js, I create RESTful APIs and implement server-side logic. With expertise in PostgresSQL database integration, I ensure efficient data storage. Proficient in package management, asynchronous programming, testing, debugging, and deployment, I prioritize reliability and scalability in my projects.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ paddingLeft: 4 }}>
              <CardMedia
                sx={{ borderRadius: '20px' }}
                component="img"
                height="140"
                image="https://latitudetechnolabs.com/wp-content/uploads/2022/05/ReactJS-logo.png"
                alt="React"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As a React developer, I excel in dynamic UI creation, state management, and backend API integration. I utilize React Router for client-side routing, leverage UI libraries for visually appealing designs, and prioritize testing and staying updated with the React ecosystem. This ensures the delivery of efficient, engaging, and high-quality React applications.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          </Container>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ paddingLeft: 4 }}>
              <CardMedia
                component="img"
                height="140"
                sx={{ borderRadius: '20px' }}
                image="https://images.unsplash.com/photo-1642697283420-194938fcc339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As a JavaScript developer, I have expertise in core JavaScript concepts, DOM manipulation, asynchronous programming, ES6 features, and working with popular libraries and frameworks like React. With experience in frontend and backend development, testing, and debugging, I bring efficiency and innovation to web application development using JavaScript.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
        </Container>
      </Box>
    </Box>
  );
}
