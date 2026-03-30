'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Transaction {
  description: string;
  transactionId: string;
  type: string;
  card: string;
  date: string;
  amount: {
    value: string;
    type: 'debit' | 'credit';
  };
}

const tableData: Transaction[] = [
  {
    description: 'Spotify Subscription',
    transactionId: '#12548796',
    type: 'Shopping',
    card: '1234 ****',
    date: '28 Jan, 12.30 AM',
    amount: { value: '-$2,500', type: 'debit' }
  },
  {
    description: 'Freepik Sales',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '25 Jan, 10.40 PM',
    amount: { value: '+$750', type: 'credit' }
  },
  {
    description: 'Mobile Service',
    transactionId: '#12548796',
    type: 'Service',
    card: '1234 ****',
    date: '20 Jan, 10.40 PM',
    amount: { value: '-$150', type: 'debit' }
  },
  {
    description: 'Wilson',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '15 Jan, 03.29 PM',
    amount: { value: '-$1050', type: 'debit' }
  },
  {
    description: 'Emily',
    transactionId: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '14 Jan, 10.40 PM',
    amount: { value: '+$840', type: 'credit' }
  }
];

export const TransactionTable: React.FC = () => {
  // Derived exact column widths from Figma x-position diffs:
  // Col 1: 1374-1143 = 231
  // Col 2: 1528-1374 = 154
  // Col 3: 1653-1528 = 125
  // Col 4: 1787-1653 = 134
  // Col 5: 1985-1787 = 198
  // Col 6: 2095-1985 = 110
  // Col 7: Remaining 128 (Container 1110 - padding 30 - used 952 = 128)
  const gridTemplate = '231px 154px 125px 134px 198px 110px 128px';

  const columns = [
    'Description',
    'Transaction ID',
    'Type',
    'Card',
    'Date',
    'Amount',
    'Receipt'
  ];

  return (
    <Box
      sx={{
        width: '1110px',
        bgcolor: '#FFFFFF',
        borderRadius: '25px',
        pl: '30px', // Exact offset from container x=1113 to column x=1143
        py: '24px',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-lato), sans-serif',
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: gridTemplate,
          pb: '16px',
          borderBottom: '1px solid #E6EAF0',
          alignItems: 'center',
        }}
      >
        {columns.map((col, idx) => (
          <Typography
            key={idx}
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#718EBF',
              fontFamily: 'inherit',
            }}
          >
            {col}
          </Typography>
        ))}
      </Box>

      {/* Data Rows */}
      {tableData.map((row, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'grid',
            gridTemplateColumns: gridTemplate,
            height: '66px', // Derived from y-spacing diffs
            alignItems: 'center',
            borderBottom: idx === tableData.length - 1 ? 'none' : '1px solid #E6EAF0',
          }}
        >
          {/* Col 1: Description with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Box
              component="img"
              src="/download_icon.svg"
              sx={{
                width: '30px',
                height: '30px',
                flexShrink: 0,
                transform: row.amount.type === 'debit' ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.2s',
              }}
            />
            <Typography sx={{ fontSize: '16px', color: '#232323', fontFamily: 'inherit' }}>
              {row.description}
            </Typography>
          </Box>

          {/* Col 2: Transaction ID */}
          <Typography sx={{ fontSize: '16px', color: '#232323', fontFamily: 'inherit' }}>
            {row.transactionId}
          </Typography>

          {/* Col 3: Type */}
          <Typography sx={{ fontSize: '16px', color: '#232323', fontFamily: 'inherit' }}>
            {row.type}
          </Typography>

          {/* Col 4: Card */}
          <Typography sx={{ fontSize: '16px', color: '#232323', fontFamily: 'inherit' }}>
            {row.card}
          </Typography>

          {/* Col 5: Date */}
          <Typography sx={{ fontSize: '16px', color: '#232323', fontFamily: 'inherit' }}>
            {row.date}
          </Typography>

          {/* Col 6: Amount */}
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              color: row.amount.type === 'debit' ? '#FE5C73' : '#16DBAA',
              fontFamily: 'inherit',
            }}
          >
            {row.amount.value}
          </Typography>

          {/* Col 7: Receipt (Download Button) */}
          <Box>
            <Button
              variant="outlined"
              sx={{
                width: '100px',
                height: '35px',
                borderRadius: '50px',
                borderColor: '#123288',
                color: '#123288',
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 400,
                fontFamily: 'inherit',
                '&:hover': {
                  borderColor: '#123288',
                  bgcolor: 'rgba(18, 50, 136, 0.04)',
                },
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
