'use client';

import { Box, Theme } from '@mui/material';

export const Sidebar = () => {
  return (
    <Box component="nav" sx={{
      width: (theme: Theme) => theme.layout.drawerWidth,
      minHeight: '100vh',
      backgroundColor: 'background.paper',
      borderRight: 1,
      borderColor: 'divider',
      display: { xs: 'none', md: 'block' },
    }}>

    </Box >
  );
};
