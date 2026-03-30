import { Box, Stack, Typography, Theme } from '@mui/material';
import Image from 'next/image';

interface CreditCardProps {
  variant?: 'active' | 'inactive';
  balance?: string;
  holder?: string;
  expiry?: string;
  cardNumber?: string;
}

export const CreditCard = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'active',
  balance = '$5,756',
  holder = 'Eddy Cusuma',
  expiry = '12/22',
  cardNumber = '3778 **** **** 1234',
}: CreditCardProps) => {

  return (
    <Box sx={(theme: Theme) => ({
      width: '100%',
      maxWidth: {
        xs: 325,
        md: 231,
        lg: 350
      },
      aspectRatio: {
        xs: '325/214',
        md: '231/170',
        lg: '350/235'
      },
      background: variant === 'active'
        ? 'linear-gradient(135deg, #4C49ED 0%, #0A06F4 100%)'
        : theme.palette.background.paper,
      border: variant === 'inactive' ? `1px solid ${theme.palette.divider}` : 'none',
      borderRadius: { xs: '15px', md: '20px', lg: '25px' },
      position: 'relative',
      overflow: 'hidden',
      color: variant === 'active' ? 'common.white' : 'text.primary',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: theme.typography.fontFamily,
    })}>
      {/* Top Section: Balance & Chip */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          pt: 'clamp(1rem, 2vw, 1.6875rem)', // Fluid top padding
          px: 'clamp(1.25rem, 2vw, 1.625rem)', // Fluid side padding (20px -> 26px)
          pb: 0
        }}
      >
        <Stack>
          <Typography
            variant="caption"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)' // 10px -> 12px
            }}
          >
            Balance
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 'clamp(1rem, 1.4vw, 1.25rem)',
                md: '1.125rem', // 18px at 1208px
                lg: '1.25rem'   // 20px at 1440px
              },
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            {balance}
          </Typography>
        </Stack>
        <Box sx={{ width: 'clamp(28px, 2.5vw, 35px)', height: 'auto' }}>
          <Image
            src={variant === 'active' ? "/Chip_Card.svg" : "/Chip_Card_2.png"}
            alt="card chip"
            width={35}
            height={35}
            style={{
              width: '100%',
              height: 'auto',
              filter: variant === 'inactive' ? 'grayscale(1) brightness(0)' : 'none'
            }}
          />
        </Box>
      </Stack>

      {/* Middle Section: Holder & Expiry */}
      <Stack
        direction="row"
        spacing={8.5} // 68px
        sx={{
          px: { xs: '1.25rem', md: '1.375rem', lg: '1.625rem' }, // 20px, 22px, 26px
          mb: 'auto',
          pt: { xs: '1.5rem', md: '1.75rem', lg: '2.375rem' } // 24px, 28px, 38px
        }}
      >
        <Stack spacing={0.25}>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: { xs: '0.5rem', md: '0.5625rem', lg: '0.625rem' } // 8px, 9px, 10px
            }}
          >
            CARD HOLDER
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '0.75rem', md: '0.8125rem', lg: '0.9375rem' }, // 12px, 13px, 15px
              whiteSpace: 'nowrap'
            }}
          >
            {holder}
          </Typography>
        </Stack>
        <Stack spacing={0.25}>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: { xs: '0.5rem', md: '0.5625rem', lg: '0.625rem' } // 8px, 9px, 10px
            }}
          >
            VALID THRU
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '0.75rem', md: '0.8125rem', lg: '0.9375rem' } // 12px, 13px, 15px
            }}
          >
            {expiry}
          </Typography>
        </Stack>
      </Stack>

      {/* Bottom Section: Card Number & Footer */}
      <Box
        sx={(theme) => ({
          background: variant === 'active'
            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)'
            : 'none',
          borderTop: variant === 'inactive' ? `1px solid ${theme.palette.divider}` : 'none',
          px: 'clamp(1.25rem, 2vw, 1.625rem)', // Fluid side padding
          py: 'clamp(1rem, 1.5vw, 1.5rem)', // 16px -> 24px
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        })}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.125rem', lg: '1.375rem' }, // 16px, 18px, 22px
            letterSpacing: '1px',
            whiteSpace: 'nowrap'
          }}
        >
          {cardNumber}
        </Typography>
        <Stack direction="row" spacing={-1.5}>
          <Box sx={{
            width: 'clamp(24px, 2.5vw, 30px)',
            height: 'clamp(24px, 2.5vw, 30px)',
            bgcolor: variant === 'active' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)',
            borderRadius: '50%'
          }} />
          <Box sx={{
            width: 'clamp(24px, 2.5vw, 30px)',
            height: 'clamp(24px, 2.5vw, 30px)',
            bgcolor: variant === 'active' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)',
            borderRadius: '50%'
          }} />
        </Stack>
      </Box>
    </Box>
  );
};
