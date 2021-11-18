/**
 * Asynchronously loads the component for NotFoundPage
 */

import { PageLoading } from 'app/components/common/pageLoading';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: <PageLoading />,
  },
);
