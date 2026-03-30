'use client';

import React from 'react';
import { Box, Typography, Button, TextField, Tab, Tabs, Avatar, IconButton } from '@mui/material';

export const ProfileForm: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: '1110px',
        minHeight: '717px',
        bgcolor: '#FFFFFF',
        borderRadius: '25px',
        p: '30px',
        pt: '37px', // y=1043 - y=1006 = 37px to tabs top
        boxSizing: 'border-box',
        fontFamily: 'var(--font-lato), sans-serif',
      }}
    >
      {/* Tabs Section */}
      <Box sx={{ borderBottom: '1px solid #F4F5F7', mb: '52px' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            minHeight: 'auto',
            '& .MuiTabs-indicator': {
              backgroundColor: '#1814F3',
              height: '3px',
              borderRadius: '10px 10px 0 0',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 500,
              minWidth: 'auto',
              p: 0,
              px: '16px', // Align text with x=10399 when indicator starts at x=10383
              mr: '30px', 
              color: '#718EBF',
              fontFamily: 'inherit',
              '&.Mui-selected': {
                color: '#1814F3',
              },
            },
          }}
        >
          <Tab label="Edit Profile" />
          <Tab label="Preferences" />
          <Tab label="Security" />
        </Tabs>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '130px 1fr',
          gap: '55px', // 10568 - (10383 + 130) = 55
        }}
      >
        {/* Left Section: Profile Image */}
        <Box sx={{ position: 'relative', width: '130px', height: '130px', mt: '3px' }}>
          <Avatar
            src="/user_profile.png"
            sx={{ width: 130, height: 130 }}
          />
          <IconButton
            sx={{
              position: 'absolute',
              right: '-5px',
              bottom: '5px',
              bgcolor: '#1814F3',
              width: '30px',
              height: '30px',
              '&:hover': { bgcolor: '#1814F3' },
            }}
          >
            <Box
              component="svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4578 1.4925C10.6301 1.30327 10.8407 1.15174 1.0772 1.04633C11.3137 0.94092 11.5714 0.883789 11.8344 0.883789C12.0975 0.883789 12.3551 0.94092 12.5916 1.04633C12.8281 1.15174 13.0387 1.30327 13.211 1.4925C13.5592 1.87483 13.7547 1.38531 13.7547 1.91891C13.7547 2.45252 13.5592 2.96299 13.211 3.34533L4.62933 12.7753L1.24545 13.7162L2.09241 10.0475L10.4578 1.4925Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>
          </IconButton>
        </Box>

        {/* Right Section: Form Fields */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '418px 418px',
            columnGap: '29px',
            rowGap: '22px', // 1227 - (1155 + 50) = 22
          }}
        >
          {[
            { label: 'Your Name', value: 'Charlene Reed' },
            { label: 'User Name', value: 'Charlene Reed' },
            { label: 'Email', value: 'charlenereed@gmail.com' },
            { label: 'Password', value: '**********', type: 'password' },
            { label: 'Date of Birth', value: '25 January 1990' },
            { label: 'Present Address', value: 'San Jose, California, USA' },
            { label: 'Permanent Address', value: 'San Jose, California, USA' },
            { label: 'City', value: 'San Jose' },
            { label: 'Postal Code', value: '45962' },
            { label: 'Country', value: 'USA' },
          ].map((field, idx) => (
            <Box key={idx}>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#232323',
                  mb: '11px',
                  fontFamily: 'inherit',
                }}
              >
                {field.label}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                defaultValue={field.value}
                type={field.type || 'text'}
                InputProps={{
                  sx: {
                    height: '50px',
                    borderRadius: '15px',
                    '& fieldset': { borderColor: '#DFEAF2' },
                    '&:hover fieldset': { borderColor: '#DFEAF2' },
                    '&.Mui-focused fieldset': { borderColor: '#1814F3' },
                    fontSize: '15px',
                    color: '#718EBF',
                    fontFamily: 'inherit',
                  },
                }}
              />
            </Box>
          ))}

          {/* Save Button Row */}
          <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', mt: '30px' }}>
            <Button
              variant="contained"
              sx={{
                width: '190px',
                height: '50px',
                borderRadius: '15px',
                bgcolor: '#1814F3',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 600,
                fontFamily: 'inherit',
                '&:hover': { bgcolor: '#1210C4' },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
