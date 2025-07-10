import {
    createPlugin,
    createComponentExtension,
  } from '@backstage/core-plugin-api';
  
export const rhdhConfigurableSigninPlugin = createPlugin({
    id: 'rhdh-configurable-signin',
});

export const RHDHConfigurableSignInPageExtension = rhdhConfigurableSigninPlugin.provide(
    createComponentExtension({
        name: 'RHDHConfigurableSignInPage',
        component: {
        lazy: () => import('./components/RHDHConfigurableSignInPage').then(m => m.RHDHConfigurableSignInPage),
        },
    }),
);