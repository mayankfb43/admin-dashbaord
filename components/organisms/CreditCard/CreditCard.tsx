import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface CreditCardProps {
  balance?: string;
  holder?: string;
  expiry?: string;
  cardNumber?: string;
  variant?: 'active' | 'inactive';
}

/**
 * CreditCard Component - Fluid Responsive Implementation
 * Replicates svg_375 (375px), svg_1208 (1208px), and svg_1440 (1440px)
 */
export const CreditCard: React.FC<CreditCardProps> = ({
  balance = '$5,756',
  holder = 'Eddy Cusuma',
  expiry = '12/22',
  cardNumber = '3778 **** **** 1234',
  variant = 'active',
}) => {
  const isActive = variant === 'active';
  const theme = useTheme();

  // Color Palette from Design
  const cardBg = isActive
    ? 'linear-gradient(108deg, #4C49ED 0%, #0A06F4 100%)'
    : '#FFFFFF';
  const textColor = isActive ? '#FFFFFF' : '#343C6A';
  const labelColor = isActive ? 'rgba(255, 255, 255, 0.7)' : '#718EBF';

  /**
   * FLUID SCALING LOGIC
   * Targets: 
   * - 375px viewport: 265x170px card
   * - 1208px viewport: 231x170px card
   * - 1440px viewport: 350x235px card
   */
  const fluidWidth = {
    xs: '265px', // Mobile
    sm: 'clamp(231px, calc(280px - 4vw), 265px)', // 375 -> 1208 (decreasing)
    tablet: 'clamp(231px, calc(-388px + 51.3vw), 350px)', // 1208 -> 1440 (increasing)
  };

  const fluidHeight = {
    xs: '170px',
    tablet: 'clamp(170px, calc(-168px + 28vw), 235px)', // 1208 -> 1440
  };

  const fluidRadius = {
    xs: '15px',
    tablet: 'clamp(20px, calc(-5px + 2vw), 25px)', // 1208 -> 1440
  };

  const bottomSectionHeight = {
    xs: '51px',
    tablet: 'clamp(51px, calc(-47px + 8vw), 70px)', // 119 split at 1208, 165 split at 1440
  };

  return (
    <Box
      sx={{
        width: fluidWidth,
        height: fluidHeight,
        borderRadius: fluidRadius,
        background: cardBg,
        color: textColor,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive ? '0px 10px 20px rgba(76, 73, 237, 0.2)' : 'none',
        border: isActive ? 'none' : '1px solid #DFEAF2',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* 1. Header Section (Balance & Chip) */}
      <Box sx={{ position: 'absolute', top: '12%', left: '7%', right: '7%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="caption" sx={{ color: labelColor, fontSize: 'clamp(10px, 1vw, 12px)', lineHeight: 1 }}>
              Balance
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: 'clamp(16px, 1.5vw, 20px)', mt: 0.5, lineHeight: 1 }}>
              {balance}
            </Typography>
          </Box>

          <Box sx={{ width: 'clamp(25px, 2.5vw, 35px)', height: 'clamp(25px, 2.5vw, 35px)' }}>
            <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none">
              <rect width="35" height="35" rx="4" fill={isActive ? "#FFF" : "#343C6A"} fillOpacity={isActive ? 0.3 : 0.1} />
              <path d="M5 10H30M5 17H30M5 24H30M12 5V30M22 5V30" stroke={isActive ? "#FFF" : "#343C6A"} strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>
          </Box>
        </Box>
      </Box>

      {/* 2. Middle Section (Holder & Expiry) */}
      <Box sx={{ position: 'absolute', top: '45%', left: '7%', right: '7%', display: 'flex', gap: 'clamp(20px, 5vw, 60px)' }}>
        <Box>
          <Typography variant="caption" sx={{ color: labelColor, textTransform: 'uppercase', fontSize: 'clamp(9px, 0.8vw, 12px)', lineHeight: 1 }}>
            Card Holder
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 'clamp(12px, 1vw, 15px)', mt: 0.5, lineHeight: 1 }}>
            {holder}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: labelColor, textTransform: 'uppercase', fontSize: 'clamp(9px, 0.8vw, 12px)', lineHeight: 1 }}>
            Valid Thru
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 'clamp(12px, 1vw, 15px)', mt: 0.5, lineHeight: 1 }}>
            {expiry}
          </Typography>
        </Box>
      </Box>

      {/* 3. Bottom Accent Section (Number & Mastercard) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: bottomSectionHeight,
          background: isActive ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '7%',
        }}
      >
        <Typography
          sx={{
            fontSize: 'clamp(15px, 1.8vw, 22px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1
          }}
        >
          {cardNumber}
        </Typography>

        <Box sx={{ position: 'relative', width: 'clamp(30px, 3.5vw, 44px)', height: 'clamp(20px, 2.5vw, 30px)' }}>
          <Box sx={{ width: 'clamp(20px, 2.5vw, 30px)', height: 'clamp(20px, 2.5vw, 30px)', borderRadius: '50%', backgroundColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(145,153,175,0.5)', position: 'absolute', left: 0 }} />
          <Box sx={{ width: 'clamp(20px, 2.5vw, 30px)', height: 'clamp(20px, 2.5vw, 30px)', borderRadius: '50%', backgroundColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(145,153,175,0.5)', position: 'absolute', right: 0 }} />
        </Box>
      </Box>

      {/* Background Mask for Inactive Variant */}
      {!isActive && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: '#FFFFFF' }} />
      )}
    </Box>
  );
};
