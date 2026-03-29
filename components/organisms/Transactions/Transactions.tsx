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
        width: '100%',
        maxWidth: '21.875rem', // 350px
        height: 'auto',
        aspectRatio: {
          xs: '325/214',
          md: '231/170',
          lg: '350/235'
        },
        borderRadius: {
          xs: '0.9375rem', // 15px
          md: '1.25rem', // 20px
          lg: '1.5625rem' // 25px
        },
        display: 'flex',
        flexDirection: 'column',
        // Internal padding in rem
        p: {
          xs: '1.25rem', // 20px
          md: '1.5rem',  // 24px

        }
      }}
    >
      <Stack
        spacing={{ xs: '0.625rem', md: '0.6875rem', lg: '0.75rem' }} // ~10px, 11px, 12px
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        {transactions.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing="1rem"
            sx={{ width: '100%' }}
          >
            <Stack direction="row" alignItems="center" spacing="1rem">
              <Box sx={{
                width: 'clamp(2.1875rem, 3.5vw, 3.125rem)', // Reduced to 35px - 50px
                height: 'clamp(2.1875rem, 3.5vw, 3.125rem)',
                borderRadius: '50%',
                bgcolor: item.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                '& svg': {
                  fontSize: 'clamp(1.125rem, 1.75vw, 1.5rem)' // Reduced to 18px - 24px
                }
              }}>
                {item.icon}
              </Box>
              <Stack spacing="0.125rem">
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#232323',
                    fontSize: 'clamp(0.8125rem, 1vw, 1rem)', // 13px - 16px
                    lineHeight: 1.1
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#718EBF',
                    fontSize: 'clamp(0.6875rem, 0.8vw, 0.875rem)', // 11px - 14px
                    lineHeight: 1
                  }}
                >
                  {item.date}
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{
                fontWeight: 600,
                color: item.type === 'positive' ? '#41D4A8' : '#FF4B4A',
                fontSize: 'clamp(0.8125rem, 1vw, 1rem)', // 13px - 16px
                whiteSpace: 'nowrap',
                textAlign: 'right'
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
