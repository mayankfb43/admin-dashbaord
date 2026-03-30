'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Card } from '../../molecules';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const transactions = [
  {
    id: 1,
    icon: <PaymentIcon sx={{ color: '#FFBB38' }} />,
    iconBg: '#FFF5D9',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    type: 'negative'
  },
  {
    id: 2,
    icon: <AccountBalanceWalletIcon sx={{ color: '#396AFF' }} />,
    iconBg: '#E7EDFF',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    type: 'positive'
  },
  {
    id: 3,
    icon: <CurrencyExchangeIcon sx={{ color: '#16DBCC' }} />,
    iconBg: '#DCFAF8',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    type: 'positive'
  }
];

export const RecentTransactions = () => {
  // --- PIECEWISE FLUID DIMENSIONS ---
  const width = {
    xs: 325,
    sm: 'clamp(231px, calc(379.3px - 14.48vw), 325px)', // 375 -> 1024 (down)
    md: 'clamp(231px, calc(-61.9px + 28.61vw), 350px)', // 1024 -> 1440 (up)
  };

  const height = {
    xs: 214,
    sm: 'clamp(170px, calc(239.4px - 6.78vw), 214px)',
    md: 'clamp(170px, calc(10px + 15.63vw), 235px)',
  };

  const iconSize = {
    xs: 50,
    md: 'clamp(35px, calc(-1.1px + 3.5vw), 50px)', // Fixed: 35 at 1024, 50 at 1440
  };

  const stackSpacing = {
    xs: '10px',
    md: 'clamp(10px, calc(-13.1px + 2.25vw), 20px)',
  };

  return (
    <Card
      title="Recent Transaction"
      sx={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '15px', tablet: '25px' },
        borderRadius: { xs: '15px', tablet: '25px' },
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <Stack spacing={stackSpacing} sx={{ flex: 1, justifyContent: 'center' }}>
        {transactions.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Stack direction="row" alignItems="center" spacing="15px">
              <Box
                sx={{
                  width: iconSize,
                  height: iconSize,
                  borderRadius: '50%',
                  bgcolor: item.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  '& svg': {
                    fontSize: 'clamp(20px, 1.9vw, 28px)'
                  }
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: '#232323',
                    fontSize: 'clamp(13px, 1.1vw, 16px)',
                    lineHeight: 1.2
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#718EBF',
                    fontSize: 'clamp(11px, 0.9vw, 15px)',
                    lineHeight: 1.2
                  }}
                >
                  {item.date}
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontWeight: 500,
                color: item.type === 'positive' ? '#41D4A8' : '#FF4B4A',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                whiteSpace: 'nowrap'
              }}
            >
              {item.amount}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
};
