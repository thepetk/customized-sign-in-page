import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { rhdhConfigurableSigninPlugin, RHDHConfigurableSignInPage } from '../src/plugin';

createDevApp()
  .registerPlugin(rhdhConfigurableSigninPlugin)
  .addPage({
    element: <RHDHConfigurableSignInPage />,
    title: 'Root Page',
    path: '/rhdh-configurable-signin',
  })
  .render();
