import {
    createPlugin,
    createRoutableExtension,
  } from '@backstage/core-plugin-api';
  
import { rootRouteRef } from './routes';

export const rhdhConfigurableSigninPlugin = createPlugin({
    id: 'rhdh-configurable-signin',
    routes: {
        root: rootRouteRef,
    },
});

export const RHDHConfigurableSignInPage = rhdhConfigurableSigninPlugin.provide(
    createRoutableExtension({
        name: 'RHDHConfigurableSignInPage',
        component: () =>
        import('./components/RHDHConfigurableSignInPage').then(m => m.RHDHConfigurableSignInPage),
        mountPoint: rootRouteRef,
    }),
);