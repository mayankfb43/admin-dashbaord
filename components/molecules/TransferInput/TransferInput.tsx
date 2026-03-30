'use client';

import React from 'react';
import { Box, InputBase, Button } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const TransferInput: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EDF1F7',
        borderRadius: '1.5625rem', // 25px
        height: { xs: '2.5rem', md: '3.125rem' }, // 40px -> 50px
        width: '100%',
        maxWidth: { xs: '100%', lg: '16.5625rem' }, // 265px
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <InputBase
        placeholder="525.50"
        sx={{
          flex: 1,
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.75rem, 0.7rem + 0.3vw, 1rem)', // 12px -> 16px
          color: '#718EBF',
          fontWeight: 400,
          pl: { xs: '0.9375rem', md: '1.5625rem' }, // 15px -> 25px
          '& input::placeholder': {
            color: '#718EBF',
            opacity: 1,
          },
        }}
      />
      <Button
        variant="contained"
        endIcon={<SendRoundedIcon sx={{ transform: 'rotate(-30deg)', fontSize: '1.125rem !important' }} />}
        sx={{
          backgroundColor: '#1814F3',
          color: '#FFFFFF',
          borderRadius: '1.5625rem',
          height: '100%',
          px: { xs: '1rem', md: '2.5rem' },
          textTransform: 'none',
          fontSize: 'clamp(0.8125rem, 0.77rem + 0.2vw, 1rem)', // 13px -> 16px
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)',
          minWidth: { xs: '5rem', md: '7.8125rem' }, // 80px -> 125px
          '&:hover': {
            backgroundColor: '#110EBE',
            boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};
