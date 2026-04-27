import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar, List,
    CssBaseline, Typography, Divider, IconButton, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Collapse, Tooltip
} from '@mui/material';

import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    ArrowDropDown,
    Dashboard,
    AddBox,
    Category,
    Add,
    Notifications,
    Person,
    ArrowUpward,
    ArrowDropUp
} from '@mui/icons-material';

import SearchBox from '../Components/SearchBox';
import ProfileAvatar from '../Components/ProfileAvatar';
import { Link, Outlet } from 'react-router';

const drawerWidth = 240;

/* ================= Drawer Styles ================= */

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin']),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),

    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

/* ================= Menu Data ================= */

const menuItems = [
    {
        name: "Dashboard", subItems: [], icon: <Dashboard />,
        SidebarLink: "/",
    },
    {
        name: "Products",
        subItems: [{ name: "Add Product", SidebarLink: "/product" }, { name: "Edit Product", SidebarLink: "/products/edit" }, { name: "View Product", SidebarLink: "/products/view" }],
        icon: <AddBox />
    },
    {
        name: "Categories",
        subItems: [{ name: "Add Category", SidebarLink: "/categories/add" }, { name: "Edit Category", SidebarLink: "/categories/edit" }, { name: "View Category", SidebarLink: "/categories/view" }],
        icon: <Category />
    },
    {
        name: "Brands",
        subItems: [{ name: "Add Brand", SidebarLink: "/brands/add" }, { name: "Edit Brand", SidebarLink: "/brands/edit" }, { name: "View Brand", SidebarLink: "/brands/view" }],
        icon: <Add />
    },
    {
        name: "Notifications",
        subItems: [{ name: "View Notifications", SidebarLink: "/notifications" }],
        icon: <Notifications />
    },
    {
        name: "Profile",
        subItems: [{ name: "Edit Profile", SidebarLink: "/profile" }, { name: "View Profile", SidebarLink: "/profile/view" }],
        icon: <Person />
    },
];

/* ================= Component ================= */

export default function Sidebar() {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(null);

    const handleToggle = (name) => {
        setOpenMenu(prev => (prev === name ? null : name));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* ================= AppBar ================= */}
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Laptop Harbour
                    </Typography>

                    <SearchBox />
                    <Box sx={{ flexGrow: 1 }} />
                    <ProfileAvatar />
                </Toolbar>
            </AppBar>

            {/* ================= Drawer ================= */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List>
                    {menuItems.map(({ name, subItems, icon, SidebarLink }) => (
                        <React.Fragment key={name}>
                            {name === "Dashboard" && SidebarLink === "/"}
                            {/* Parent Item */}
                            <ListItem disablePadding>
                                <Tooltip title={!open ? name : ""} placement="right">
                                    <ListItemButton component={name === "Dashboard" ? Link : 'div'} to={name === "Dashboard" ? SidebarLink : undefined}
                                        onClick={() => subItems.length > 0 && handleToggle(name)}
                                        sx={{
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 2 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={name}
                                            sx={{ opacity: open ? 1 : 0 }}
                                        />

                                        {open && subItems.length > 0 && (
                                            openMenu === name
                                                ? <ArrowDropUp />
                                                : <ArrowDropDown />
                                        )}
                                    </ListItemButton>
                                </Tooltip>
                            </ListItem>
                            {/* Sub Items */}
                            {open && subItems.length > 0 && (
                                <Collapse in={openMenu === name} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {subItems.map(({ name, SidebarLink }) => (
                                            <ListItemButton component={Link} to={SidebarLink} key={name} sx={{ pl: 4 }}>
                                                <ListItemText primary={name} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Drawer >

            {/* ================= Main Content ================= */}
            < Box component="main" sx={{ flexGrow: 1, p: 3 }
            }>
                <DrawerHeader />
                <Outlet />
            </Box >
        </Box >
    );
}