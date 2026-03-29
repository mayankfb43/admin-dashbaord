'use client';

import { Box, Avatar, Typography } from '@mui/material';

interface AvatarItemProps {
  image: string;
  name: string;
  role: string;
  active?: boolean;
}

export const AvatarItem = ({ image, name, role, active }: AvatarItemProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
      cursor: 'pointer',
      textAlign: 'center',
      minWidth: { xs: 71, md: 70, lg: 80 }
    }}>
      <Avatar
        src={image}
        sx={{
          width: 50,
          height: 50,
          mb: 1,
          border: active ? (theme) => `2px solid ${theme.palette.text.primary}` : 'none'
        }}
      />
      <Box>
        <Typography variant="body1" sx={{ fontWeight: active ? 700 : 400 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
