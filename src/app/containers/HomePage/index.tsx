/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { HomePageReducer, sliceKey } from './slice';
import { homePageSaga } from './saga';
import { useDispatch } from "react-redux";
import { push, replace } from "connected-react-router";
import { AppPages } from "app/constants";

interface Props { }

export const HomePage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  // const homePage = useSelector(selectHomePage);
  const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();
  const handleGoToLoginClick = () => {
    dispatch(replace(AppPages.LoginPage))
  }
  return <div className="noAlignment">

    <button onClick={handleGoToLoginClick} >go to login</button>
  </div>;
});
