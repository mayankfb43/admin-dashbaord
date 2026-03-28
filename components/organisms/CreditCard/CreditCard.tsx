'use client';

import { Box, Typography, Theme } from '@mui/material';

interface CreditCardProps {
  variant?: 'active' | 'inactive';
  balance?: string;
  holder?: string;
  expiry?: string;
  cardNumber?: string;
}

export const CreditCard = ({
  variant = 'active',
  balance = '$5,756',
  holder = 'Eddy Cusuma',
  expiry = '12/22',
  cardNumber = '3778 **** **** 1234',
}: CreditCardProps) => {
  const isActive = variant === 'active';

  return (
    <Box
      sx={{
        minWidth: '100%',
        maxWidth: 350,
        height: (theme: Theme) => theme.layout.cardHeight,
        borderRadius: 1, // Inherits from theme.shape.borderRadius (25px)
        background: isActive
          ? (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`
          : 'white',
        border: !isActive ? 1 : 'none',
        borderColor: 'divider',
        color: isActive ? 'primary.contrastText' : 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: isActive ? '0px 10px 20px rgba(58, 54, 219, 0.2)' : 'none',
      }}
    >
      {/* Top Section */}
      <Box sx={{ p: (theme: Theme) => theme.customSpacing.cardPadding, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.7,
                color: isActive ? 'inherit' : 'text.secondary',
              }}
            >
              Balance
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 600 }}>
              {balance}
            </Typography>
          </Box>
          {/* Chip Icon placeholder */}
          <Box
            sx={{
              width: 35,
              height: 35,
              borderRadius: 1,
              bgcolor: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: 20, height: 15, border: 1, borderColor: 'inherit', borderRadius: 0.5, opacity: 0.5 }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 8, mt: 3 }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                opacity: 0.7,
                color: isActive ? 'inherit' : 'text.secondary',
              }}
            >
              Card Holder
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {holder}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="overline"
              sx={{
                opacity: 0.7,
                color: isActive ? 'inherit' : 'text.secondary',
              }}
            >
              Valid Thru
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {expiry}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section Card Number */}
      <Box
        sx={{
          p: (theme: Theme) => theme.customSpacing.cardPadding,
          height: '70px',
          background: isActive ? 'linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0))' : 'transparent',
          borderTop: !isActive ? 1 : 'none',
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ letterSpacing: '2px', fontWeight: 600 }}>
          {cardNumber}
        </Typography>

        {/* Card Brand Placeholder */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              bgcolor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.1)',
              borderRadius: '50%',
              mr: -1.5,
            }}
          />
          <Box
            sx={{
              width: 28,
              height: 28,
              bgcolor: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.05)',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
