/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { HomePageReducer, sliceKey } from './slice';
import { homePageSaga } from './saga';

interface Props { }

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  // const homePage = useSelector(selectHomePage);
  // const { t, i18n } = useTranslation();

  return <div className="noAlignment">
    home
  </div>;
});
