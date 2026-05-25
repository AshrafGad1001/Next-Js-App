'use client'

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'

const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/brands' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>

                    {/* Brand */}
                    <Typography variant="h6" sx={{ flexGrow: 0, mr: 2 }}>
                        MyApp
                    </Typography>

                    {/* Desktop Links - Center */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        {navLinks.map((link) => (
                            <Button
                                key={link.label}
                                color="inherit"
                                component={Link}
                                href={link.href}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Desktop Auth - Right */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Button color="inherit" component={Link} href="/login">Login</Button>
                        <Button variant="outlined" color="inherit" component={Link} href="/register">Register</Button>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton color="inherit" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250 }}>

                    {/* Close Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider />

                    {/* Nav Links */}
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component={Link} href={link.href} onClick={() => setOpen(false)}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    {/* Auth Links */}
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} href="/login" onClick={() => setOpen(false)}>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} href="/register" onClick={() => setOpen(false)}>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>
            </Drawer>
        </>
    )
}