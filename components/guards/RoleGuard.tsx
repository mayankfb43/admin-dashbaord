'use client';

import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Typography, Box } from '@mui/material';

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles?: string[];
  requiredPermissions?: string[];
}

export default function RoleGuard({
  children,
  allowedRoles,
  requiredPermissions,
}: RoleGuardProps) {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return null; // Or redirect to login
  }

  const hasRole = !allowedRoles || (user && allowedRoles.includes(user.role));
  const hasPermissions =
    !requiredPermissions ||
    (user && requiredPermissions.every((p) => user.permissions.includes(p)));

  if (!hasRole || !hasPermissions) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">
          Access Denied: You do not have permission to view this content.
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
