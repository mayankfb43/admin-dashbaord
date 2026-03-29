'use client';

import { Box, IconButton, Theme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AvatarItem, TransferInput, Card } from '../../molecules';

const users = [
  { name: 'Livia Bator', role: 'CEO', image: 'https://i.pravatar.cc/150?u=livia' },
  { name: 'Randy Press', role: 'Director', image: 'https://i.pravatar.cc/150?u=randy' },
  { name: 'Workman', role: 'Designer', image: 'https://i.pravatar.cc/150?u=workman' },
];

export const QuickTransfer = () => {
  return (
    <Card
      title="Quick Transfer"
      sx={{
        p: (theme: Theme) => theme.customSpacing.cardPadding,
        height: (theme: Theme) => theme.layout.balanceCardHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: { xs: 2, md: 1, lg: 2 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 1, lg: 2 } }}>
        <Box sx={{ display: 'flex', gap: { xs: 1, md: 1, lg: 1 }, flexGrow: 1, overflow: 'hidden' }}>
          {users.map((user, i) => (
            <AvatarItem key={i} {...user} active={i === 0} />
          ))}
        </Box>
        <IconButton sx={{
          bgcolor: '#FFFFFF',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          width: { xs: 50, md: 40, lg: 50 },
          height: { xs: 50, md: 40, lg: 50 },
          '&:hover': { bgcolor: '#F5F7FB' }
        }}>
          <ArrowForwardIosIcon sx={{ fontSize: 18, color: 'text.secondary', ml: 0.5 }} />
        </IconButton>
      </Box>

      <TransferInput />
    </Card>
  );
};
