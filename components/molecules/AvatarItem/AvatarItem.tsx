'use client';

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface AvatarItemProps {
  name: string;
  role: string;
  image: string;
  active?: boolean;
}

export const AvatarItem: React.FC<AvatarItemProps> = ({ name, role, image, active }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Avatar
        src={image}
        sx={{
          width: {
            xs: '50px',
            md: 'clamp(3.125rem, 2.5rem + 2vw, 4.375rem)', // Fluid between 50px and 70px
          },
          height: {
            xs: '50px',
            md: 'clamp(3.125rem, 2.5rem + 2vw, 4.375rem)',
          },
          border: active ? '2px solid #1814F3' : 'none',
          mb: '0.75rem',
        }}
      />
      <Typography
        sx={{
          fontSize: 'clamp(0.75rem, 0.65rem + 0.5vw, 1rem)', // Fluid between 12px and 16px
          fontWeight: active ? 700 : 400,
          color: active ? '#232323' : '#232323',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.2,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 'clamp(0.625rem, 0.55rem + 0.4vw, 0.875rem)', // Fluid between 10px and 14px
          fontWeight: active ? 700 : 400,
          color: active ? '#1814F3' : '#718EBF',
          fontFamily: 'Inter, sans-serif',
          mt: '0.25rem',
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};
