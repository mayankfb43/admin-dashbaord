'use client';

import { Box, Theme } from '@mui/material';

export const Sidebar = () => {
  return (
    <Box component="nav" sx={{
      width: (theme: Theme) => theme.layout.drawerWidth,
      minWidth: (theme: Theme) => theme.layout.drawerWidth,
      flexShrink: 0,
      minHeight: '100vh',
      backgroundColor: 'background.paper',
      borderRight: 1,
      borderColor: 'divider',
      display: { xs: 'none', md: 'block' },
    }}>

    </Box >
  );
};
