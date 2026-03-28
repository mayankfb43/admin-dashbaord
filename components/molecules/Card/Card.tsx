'use client';

import React from 'react';
import { Box, Typography, Card as MuiCard, SxProps, Theme } from '@mui/material';

interface CardProps {
  title: string;
  rightElement?: React.ReactNode;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
}

export const Card = ({ title, rightElement, children, sx, titleSx }: CardProps) => {
  return (
    <Box sx={{ minWidth: 0 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: (theme: Theme) => theme.customSpacing.sectionMargin,
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 600, 
            color: 'text.primary',
            ...titleSx 
          }}
        >
          {title}
        </Typography>
        {rightElement}
      </Box>
      <MuiCard 
        sx={{ 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          p: (theme: Theme) => theme.customSpacing.cardPadding as any,
          boxShadow: 'none',
          bgcolor: 'background.paper',
          ...sx 
        }}
      >
        {children}
      </MuiCard>
    </Box>
  );
};
