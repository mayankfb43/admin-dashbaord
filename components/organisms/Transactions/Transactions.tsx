'use client';

import { Box, Typography, Stack, Theme } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import PayPalIcon from '@mui/icons-material/AccountBalanceWallet'; // Simplified placeholder
import PersonIcon from '@mui/icons-material/Person';
import { Card } from '../../molecules';

const transactions = [
  {
    id: 1,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    type: 'negative',
    icon: <PaymentsIcon sx={{ color: '#FFBB38' }} />,
    iconBg: '#FFF5D9',
  },
  {
    id: 2,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    type: 'positive',
    icon: <PayPalIcon sx={{ color: '#396AFF' }} />,
    iconBg: '#E7EDFF',
  },
  {
    id: 3,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    type: 'positive',
    icon: <PersonIcon sx={{ color: '#16DBCC' }} />,
    iconBg: '#DCFAF8',
  },
];

export const RecentTransactions = () => {
  return (
    <Card 
      title="Recent Transaction"
      sx={{ 
        height: (theme: Theme) => theme.layout.cardHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={2.5}>
        {transactions.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                width: 50, 
                height: 50, 
                borderRadius: '50%', 
                bgcolor: item.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item.icon}
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.date}
                </Typography>
              </Box>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 600, 
                color: item.type === 'positive' ? 'success.main' : 'error.main' 
              }}
            >
              {item.amount}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};
