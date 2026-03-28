'use client';

import { Box, TextField, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const TransferInput = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 1, lg: 3 } }}>
      <Typography variant="body2" sx={{ 
        color: 'text.secondary', 
        whiteSpace: 'nowrap',
        display: { xs: 'none', md: 'none', lg: 'block' }
      }}>
        Write Amount
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: 'background.default', 
        borderRadius: 999, 
        overflow: 'hidden',
        flexGrow: 1,
        maxWidth: 300
      }}>
        <TextField
          variant="standard"
          placeholder="525.50"
          InputProps={{
            disableUnderline: true,
            sx: { px: 3, py: 1, color: 'primary.main', fontWeight: 600 }
          }}
          sx={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon sx={{ transform: 'rotate(-45deg)', mt: -0.5 }} />}
          sx={{ 
            borderRadius: 999, 
            px: { xs: 4, md: 2, lg: 4 }, 
            py: 1.5,
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' }
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};
