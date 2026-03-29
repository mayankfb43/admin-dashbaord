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
      maxWidth: 350,
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
    })}>
      {/* Top Section: Balance & Chip */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          p: (theme) => theme.spacing(3),
          pb: 0
        }}
      >
        <Stack spacing={0.5}>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: 'clamp(10px, 0.8vw, 12px)'
            }}
          >
            Balance
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.2vw, 20px)'
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
        spacing={8}
        sx={{
          px: (theme) => theme.spacing(3),
          mb: 'auto',
          pt: (theme) => theme.spacing(2)
        }}
      >
        <Stack spacing={0.5}>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: 'clamp(8px, 0.7vw, 10px)'
            }}
          >
            CARD HOLDER
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 'clamp(12px, 1.1vw, 15px)',
              whiteSpace: 'nowrap'
            }}
          >
            {holder}
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.7,
              lineHeight: 1,
              fontSize: 'clamp(8px, 0.7vw, 10px)'
            }}
          >
            VALID THRU
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 'clamp(12px, 1.1vw, 15px)'
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
          px: theme.spacing(3),
          py: 'clamp(12px, 1.5vw, 20px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        })}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 'clamp(16px, 1.5vw, 22px)',
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
