import React from 'react';
import { Box, Typography } from '@mui/material';

interface CreditCardProps {
  balance?: string;
  holder?: string;
  expiry?: string;
  cardNumber?: string;
  variant?: 'active' | 'inactive';
}

/**
 * CreditCard Component - PNG-Based Fluid Responsive Implementation
 * Replicates card_mobile (265x170), card_tablet (231x170), and card_desktop (350x235)
 */
export const CreditCard: React.FC<CreditCardProps> = ({
  balance = '$5,756',
  holder = 'Eddy Cusuma',
  expiry = '12/22',
  cardNumber = '3778 **** **** 1234',
  variant = 'active',
}) => {
  const isActive = variant === 'active';

  // --- PIECEWISE FLUID DIMENSIONS ---
  const width = {
    xs: 265,
    sm: 'clamp(231px, calc(284.6px - 5.24vw), 265px)', // 375 -> 1024 (down)
    tablet: 'clamp(231px, calc(-61.9px + 28.61vw), 350px)', // 1024 -> 1440 (up)
  };

  const height = {
    xs: 170,
    tablet: 'clamp(170px, calc(10px + 15.63vw), 235px)', // 1024 -> 1440 (up)
  };

  const radius = {
    xs: 'clamp(20px, calc(7.5px + 1.2vw), 25px)',
    tablet: 'clamp(20px, calc(7.5px + 1.2vw), 25px)', // 1024 -> 1440
  };

  const splitY = {
    xs: 119,
    tablet: 'clamp(119px, calc(5.3px + 11.06vw), 165px)', // 1024 -> 1440 (119 -> 165)
  };

  // Coordinates (Fluid between Tablet and Desktop)
  const leftX = {
    xs: 15, // Refined from 20 -> 15 for 1024px
    tablet: 'clamp(15px, calc(-10.1px + 2.45vw), 25px)', // 15 at 1024, 25 at 1440
  };

  const balanceTop = {
    xs: 15, // Refined from 20 -> 15
    tablet: 'clamp(15px, calc(-10.1px + 2.45vw), 25px)',
  };

  const holderTop = {
    xs: 75, // Refined from 80 -> 75
    tablet: 'clamp(75px, calc(11.9px + 6.15vw), 100px)', // 75 at 1024, 100 at 1440
  };

  const numberTop = {
    xs: 130, // Refined from 135 -> 130
    tablet: 'clamp(130px, calc(-9.7px + 13.6vw), 185px)', // 130 at 1024, 185 at 1440
  };

  const validThruX = {
    xs: 135,
    tablet: 'clamp(135px, calc(34px + 9.8vw), 175px)', // 135 at 1024, 175 at 1440
  };

  const colors = {
    bg: isActive ? 'linear-gradient(108deg, #4C49ED 0%, #0A06F4 100%)' : '#FFFFFF',
    text: isActive ? '#FFFFFF' : '#343C6A',
    label: isActive ? 'rgba(255, 255, 255, 0.7)' : '#718EBF',
  };

  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: radius,
        background: colors.bg,
        color: colors.text,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive ? '0px 10px 20px rgba(76, 73, 237, 0.2)' : 'none',
        border: isActive ? 'none' : '1px solid #DFEAF2',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* 1. Balance Section */}
      <Box sx={{ position: 'absolute', top: balanceTop, left: leftX }}>
        <Typography sx={{ fontSize: 'clamp(10px, 0.83vw, 12px)', fontWeight: 400, color: colors.label, lineHeight: 1 }}>
          Balance
        </Typography>
        <Typography sx={{ fontSize: 'clamp(16px, 1.38vw, 20px)', fontWeight: 600, mt: '4px', lineHeight: 1 }}>
          {balance}
        </Typography>
      </Box>

      {/* 2. IC Chip */}
      <Box sx={{
        position: 'absolute',
        top: balanceTop,
        right: leftX,
        width: 'clamp(29px, 2.4vw, 35px)',
        height: 'clamp(29px, 2.4vw, 35px)'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none">
          <rect width="35" height="35" rx="4" fill={isActive ? "#FFF" : "#343C6A"} fillOpacity={isActive ? 0.3 : 0.1} />
          <path d="M5 10H30M5 17H30M5 24H30M12 5V30M22 5V30" stroke={isActive ? "#FFF" : "#343C6A"} strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>
      </Box>

      {/* 3. Holder Info */}
      <Box sx={{ position: 'absolute', top: holderTop, left: leftX }}>
        <Typography sx={{ fontSize: 'clamp(10px, 0.83vw, 12px)', color: colors.label, textTransform: 'uppercase', lineHeight: 1 }}>
          Card Holder
        </Typography>
        <Typography sx={{ fontSize: 'clamp(13px, 1.04vw, 15px)', fontWeight: 600, mt: '4px', lineHeight: 1 }}>
          {holder}
        </Typography>
      </Box>

      {/* 4. Valid Thru */}
      <Box sx={{ position: 'absolute', top: holderTop, left: 'clamp(135px, 12vw, 175px)' }}>
        <Typography sx={{ fontSize: 'clamp(10px, 0.83vw, 12px)', color: colors.label, textTransform: 'uppercase', lineHeight: 1 }}>
          Valid Thru
        </Typography>
        <Typography sx={{ fontSize: 'clamp(13px, 1.04vw, 15px)', fontWeight: 600, mt: '4px', lineHeight: 1 }}>
          {expiry}
        </Typography>
      </Box>

      {/* 5. Bottom Section Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: splitY,
          left: 0,
          right: 0,
          bottom: 0,
          background: isActive
            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)'
            : 'transparent',
        }}
      />

      {/* 6. Card Number */}
      <Typography
        sx={{
          position: 'absolute',
          top: numberTop,
          left: leftX,
          fontSize: 'clamp(15px, 1.5vw, 22px)',
          fontWeight: 600,
          letterSpacing: '1px',
          lineHeight: 1,
          zIndex: 2,
          marginTop: '4px'
        }}
      >
        {cardNumber}
      </Typography>

      {/* 7. Mastercard Logo */}
      <Box
        sx={{
          position: 'absolute',
          top: numberTop,
          right: leftX,
          width: 'clamp(30px, 3.1vw, 44px)',
          height: 'clamp(20px, 2.1vw, 30px)',
          transform: 'translateY(-20%)', // Centering adjustments
          zIndex: 2
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Box
            sx={{
              width: 'clamp(20px, 2.1vw, 30px)',
              height: 'clamp(20px, 2.1vw, 30px)',
              borderRadius: '50%',
              backgroundColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(145, 153, 175, 0.5)',
              position: 'absolute',
              left: 0
            }}
          />
          <Box
            sx={{
              width: 'clamp(20px, 2.1vw, 30px)',
              height: 'clamp(20px, 2.1vw, 30px)',
              borderRadius: '50%',
              backgroundColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(145, 153, 175, 0.5)',
              position: 'absolute',
              right: 0
            }}
          />
        </Box>
      </Box>

      {/* Mask for inactive */}
      {!isActive && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: '#FFFFFF' }} />
      )}
    </Box>
  );
};
