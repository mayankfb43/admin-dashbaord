import { Container, Grid, Typography, Box } from '@mui/material';
import { DashboardLayout } from '@templates';
import { CreditCard } from '@organism';
import { AuthOrganisms } from '@features/dummy/organisms';

export default function HomePage() {

  return (
    <Container maxWidth={'xl'} sx={{ overflowX: 'hidden' }}>
      <DashboardLayout>
        <Box sx={{ px: 4 }}>
          <AuthOrganisms />
        </Box>
      </DashboardLayout>
    </Container>
  );
}
