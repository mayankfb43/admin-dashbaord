'use client';

import React from 'react';
import { Box, Stack, IconButton, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Card, AvatarItem, TransferInput } from '../../molecules';

const users = [
  { name: 'Livia Bator', role: 'CEO', image: 'https://i.pravatar.cc/150?u=livia', active: true },
  { name: 'Randy Press', role: 'Director', image: 'https://i.pravatar.cc/150?u=randy' },
  { name: 'Workman', role: 'Designer', image: 'https://i.pravatar.cc/150?u=workman' },
];

export const QuickTransfer: React.FC = () => {
  return (
    <Card
      title="Quick Transfer"
      sx={{
        height: '100%',
        aspectRatio: {
          xs: '325 / 195', // 375px breakpoint
          md: '300 / 220', // 1208px breakpoint
          lg: '445 / 276', // 1440px breakpoint
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 'clamp(0.5rem, 0.5rem + 0.5vw, 1.25rem)', // Fluid vertical padding
        }}
      >
        {/* Avatar Row */}
        <Stack
          direction="row"
          alignItems="center"
          spacing="clamp(0.5rem, 0.4rem + 1vw, 1.875rem)" // Responsive spacing (8px to 30px)
          sx={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {users.map((user) => (
            <AvatarItem
              key={user.name}
              name={user.name}
              role={user.role}
              image={user.image}
              active={user.active}
            />
          ))}
          
          <IconButton
            sx={{
              backgroundColor: '#FFFFFF',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.05)',
              width: 'clamp(2.5rem, 2.2rem + 0.5vw, 3.125rem)', // 40px to 50px
              height: 'clamp(2.5rem, 2.2rem + 0.5vw, 3.125rem)',
              '&:hover': { backgroundColor: '#F8F9FA' },
            }}
          >
            <ChevronRightRoundedIcon sx={{ color: '#718EBF', fontSize: 'clamp(1.5rem, 1.3rem + 0.5vw, 2rem)' }} />
          </IconButton>
        </Stack>

        {/* Input Area with External Label */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ mt: 'clamp(1rem, 0.5rem + 1vw, 2rem)' }}
        >
          <Typography
            sx={{
              color: '#718EBF',
              fontSize: 'clamp(0.75rem, 0.7rem + 0.3vw, 1rem)', // 12px to 16px
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            Write Amount
          </Typography>
          <TransferInput />
        </Stack>
      </Box>
    </Card>
  );
};
