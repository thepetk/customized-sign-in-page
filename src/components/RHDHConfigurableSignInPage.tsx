import React from 'react';
import { SignInPage } from '@backstage/core-components';
import { Box, Link, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  supportAlert: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.info.light,
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'flex-start',
  },
  supportContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  iconContainer: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
  supportContent: {
    flex: 1,
  },
}));

export const RHDHConfigurableSignInPage = (props: any) => {
  const classes = useStyles();

  return (
    <Box>
      {/* Support Alert Box */}
      <Box className={classes.supportContainer}>
        <Paper className={classes.supportAlert} elevation={1}>
          <Box className={classes.iconContainer}>
            <InfoIcon color="primary" />
          </Box>
          <Box className={classes.supportContent}>
            <Typography variant="h6" gutterBottom>
              SSO Login Help
            </Typography>
            <Typography variant="body2" paragraph>
              For new users trying to login with Red Hat SSO and receive a failure, 
              please try once again in a few minutes to wait for the user catalog to be updated.
            </Typography>
            <Typography variant="body2">
              Need help? <Link href="https://github.com/redhat-ai-dev/ai-rolling-demo-gitops/issues" target="_blank">
                Report an issue
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      {/* Original SignIn Page */}
      <SignInPage {...props} />
    </Box>
  );
};