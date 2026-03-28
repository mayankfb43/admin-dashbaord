'use client';

import { Box, Theme } from '@mui/material';

export const Header = () => {
  return (
    <Box component="nav" sx={{
      height: (theme: Theme) => theme.layout.headerHeight,
      backgroundColor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
    }}>

    </Box >
  );
};
