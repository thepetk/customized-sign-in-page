import React from 'react';
import { SignInPage } from '@backstage/core-components';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Box, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  supportContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  supportAlert: {
    marginBottom: theme.spacing(3),
  },
}));

export const RHDHConfigurableSignInPage = (props: any) => {
  const classes = useStyles();

  return (
    <Box>
      {/* Support Alert Box */}
      <Box className={classes.supportContainer}>
        <Alert 
          severity="info" 
          className={classes.supportAlert}
        >
          <AlertTitle>Red Hat SSO Login Help</AlertTitle>
          <Typography variant="body2" paragraph>
            For new users trying to login with Red Hat SSO and receive a failure, 
            please try once again in a few minutes to wait for the user catalog to be updated.
          </Typography>
          <Typography variant="body2">
            Need help? {' '}
            <Link 
              href="https://github.com/redhat-ai-dev/ai-rolling-demo-gitops/issues" 
              target="_blank"
              rel="noopener"
            >
              Report an issue
            </Link>
          </Typography>
        </Alert>
      </Box>
      
      {/* Original SignIn Page */}
      <SignInPage {...props} />
    </Box>
  );
};