'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
]

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ bgcolor: 'primary.main', color: 'white', mt: 'auto' }}
        >
            {/* Desktop */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                px: 3,
                py: 1,
            }}>

                {/* Brand */}
                <Typography variant="h6" sx={{ flexGrow: 0, mr: 2 }}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </Typography>

                {/* Links - Center */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {footerLinks.map((link) => (
                        <Button key={link.label} color="inherit" component={Link} href={link.href}>
                            {link.label}
                        </Button>
                    ))}
                </Box>

                {/* Social - Right */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Button>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Button>
                </Box>

            </Box>

            {/* Mobile */}
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                alignItems: 'center',
                py: 2,
                gap: 1,
            }}>

                {/* Brand */}
                <Typography variant="h6">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Typography>

                {/* Links */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                    {footerLinks.map((link) => (
                        <Button key={link.label} color="inherit" component={Link} href={link.href} size="small">
                            {link.label}
                        </Button>
                    ))}
                </Box>

                {/* Social */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Button>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button color="inherit" component={Link} href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Button>
                </Box>

            </Box>

            {/* Bottom Bar */}
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
            <Typography
                variant="body2"
                suppressHydrationWarning
                sx={{ textAlign: 'center', py: 1, opacity: 0.7 }}
            >
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </Typography>

        </Box>
    )
}