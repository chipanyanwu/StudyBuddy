import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAuthNavigation } from '../../hooks/useAuthNavigation';

export default function Header() {
  const { user, handleProfileClick, signInAndCheckFirstTimeUser } = useAuthNavigation();
  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.light, color: '#000' }}>
      <Toolbar sx={{ position: 'relative', justifyContent: 'space-between' }}>
        {/* Left side: placeholder to keep spacing consistent */}
        <Box sx={{ width: '48px' }} />

        {/* Centered text */}
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: '600',
            fontSize: '1.4rem',
          }}
        >
          StudyBuddy
        </Typography>

        {/* Right side: Sign In button or user avatar */}
        {user ? (
          <IconButton edge="end" color="inherit" onClick={handleProfileClick}>
            <Avatar alt={user.displayName} src={user.photoURL} />
          </IconButton>
        ) : (
          <Button color="inherit" onClick={signInAndCheckFirstTimeUser}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
