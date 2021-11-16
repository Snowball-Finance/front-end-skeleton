/**
*
* LoginPage
*
*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';


import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { LoginPageReducer, sliceKey } from './slice';
import { selectLoginPage } from './selectors';
import { loginPageSaga } from './saga';

interface Props { }


export function LoginPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: LoginPageReducer });
  useInjectSaga({ key: sliceKey, saga: loginPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loginPage = useSelector(selectLoginPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <div>
        login
      </div>
    </>
  );

};
