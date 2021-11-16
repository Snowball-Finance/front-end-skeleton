/**
*
* Asynchronously loads the component for LoginPage
*
*/
import React from 'react';
import { lazyLoad } from 'utils/loadable';
import { GridLoading } from 'app/components/grid_loading/gridLoading';

export const LoginPage = lazyLoad(() => import('./index'), module => module.LoginPage, {fallback: <GridLoading />,},);