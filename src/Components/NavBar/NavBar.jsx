import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import MiniDrawer from '../SideBar/SideBar';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Outlet } from "react-router-dom";
// ******************************************************************
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../Store/users.js';
// ******************************************************************


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);





    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ChatIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <AddToDriveIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    // **************************************************************
    const dispatch = useDispatch()
    const Products = state => state.Products.productsList
    const authItems = {
        isauth: useSelector(state => state.Users.isauth),
        token: useSelector(state => state.Users.token),
        image: useSelector(state => state.Users.isauth ? state.Users.usersList[state.Users.token - 1].profileImage : []),
        lName: useSelector(state => state.Users.isauth ? state.Users.usersList[state.Users.token - 1].lName : []),
    }
    const handleLogOut = () => {
        dispatch(logOut())
    }
    const handleSearchItem = (searchItem) => {

    };
    // **************************************************************

    return (
        <>

            <Box>
                <Box sx={{ flexGrow: 1, paddingLeft: '65px' }}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                <Link href="/" color="inherit" underline="none">I3center</Link>
                            </Typography>
                            {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ ml: 2 }}
                    >
                        <PlaceIcon />
                    </IconButton> */}
                            {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e)=>{handleSearchItem(e.target.value)}}
                        />
                    </Search> */}

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                {(authItems.isauth) &&

                                    <Tooltip title="Profile" placement="bottom-start">

                                        <IconButton
                                            href="/Profile"
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            // onClick={()=>console.log('profile')}
                                            color="inherit"
                                        >
                                            <Avatar
                                                alt={authItems.lName}
                                                src={authItems.image}
                                                sx={{ width: 30, height: 30 }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                }

                                {/* {(authItems.isauth) &&
                            <Tooltip title="Chat"  placement="bottom-start">
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <ChatIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        } */}

                                {(authItems.isauth) &&
                                    <Tooltip title="Add Product" placement="bottom-start">
                                        <IconButton
                                            href="/AddProduct"
                                            size="large"
                                            aria-label="show 17 new notifications"
                                            color="inherit"
                                        >
                                            <Badge badgeContent={0} color="error">
                                                <AddToDriveIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                }

                                {(!authItems.isauth) &&
                                    <Tooltip title="Login / Register" placement="bottom-start">
                                        <IconButton
                                            href="/login"
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            // onClick={()=>console.log('login')}
                                            color="inherit"
                                        >
                                            <LoginIcon />
                                        </IconButton>
                                    </Tooltip>
                                }

                                {(authItems.isauth) &&
                                    <Tooltip title="Logout" placement="bottom-start">
                                        <IconButton

                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={() => handleLogOut()}
                                            color="inherit"
                                        >
                                            <LogoutIcon />
                                        </IconButton>
                                    </Tooltip>
                                }
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                    <Outlet />
                </Box>
                <Box>
                    <MiniDrawer />

                </Box>
            </Box>
        </>
    );
}