/**
 *
 * Asynchronously loads the component for HomePage
 *
 */
import React from 'react';
import { lazyLoad } from 'utils/loadable';
import { PageLoading } from 'app/components/common/page_loading';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  { fallback: <PageLoading /> },
);
