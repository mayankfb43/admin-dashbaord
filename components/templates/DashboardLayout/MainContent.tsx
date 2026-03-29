'use client';

import { Box, Grid, Typography } from '@mui/material';
import { CreditCard, RecentTransactions, GroupBarChart, PieChart, QuickTransfer, BalanceHistory } from '@organism';
import { Card } from '../../molecules';

export const MainContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 3, px: { xs: 3, md: 3, lg: 5 }, overflowX: 'hidden' }}>
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        {/* Credit Cards Section (8/12 = 2/3 at md+) */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            title="My Cards"
            rightElement={
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', cursor: 'pointer' }}>
                See All
              </Typography>
            }
            sx={{ bgcolor: 'transparent', p: 0 }}
          >
            <Grid container spacing={4}>
              {/* Split 6/12 at MD+, stacks at XS */}
              <Grid size={{ xs: 12, md: 6 }}>
                <CreditCard variant="active" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CreditCard variant="inactive" />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Right 1/3 Section: Recent Transaction */}
        <Grid size={{ xs: 12, md: 4 }}>
          <RecentTransactions />
        </Grid>

        {/* Second Row: Weekly Activity and Expense Statistics */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ minWidth: 0 }}>
          <GroupBarChart />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: 0 }}>
          <PieChart />
        </Grid>
        {/* Third Row: Quick Transfer and Balance History with precise grid */}
        <Grid size={12}>
          <Grid container spacing={4} columns={{ sm: 325, md: 718, lg: 1080 }}>
            <Grid size={{ sm: 325, md: 295, lg: 445 }}>
              <QuickTransfer />
            </Grid>
            <Grid size={{ sm: 325, md: 423, lg: 635 }}>
              <BalanceHistory />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {children}
    </Box>
  );
};
