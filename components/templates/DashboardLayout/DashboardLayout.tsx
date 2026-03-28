'use client';

import { Box } from '@mui/material';
import { Sidebar, Header } from '@organism';
import { MainContent } from '@templates/DashboardLayout/MainContent';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <MainContent>{children}</MainContent>
      </Box>
    </Box>
  );
};
