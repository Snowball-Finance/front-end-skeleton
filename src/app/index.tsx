/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { AppPages } from './constants';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils/history';
import { useSelector } from 'react-redux';
import { selectRouter } from './appSelectors';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { LoginPage } from "./containers/LoginPage/Loadable";

export function App() {
  const router = useSelector(selectRouter);
  const { t } = useTranslation();
  const { location } = router
  console.log(location)
  return (
    <ConnectedRouter history={history}>
      <Helmet
        titleTemplate="%s - Skeleton"
        defaultTitle={t(translations.HomePage.home())}
      >
        <meta name="description" content="Skeleton" />
      </Helmet>
      <Switch>
        <Route exact path={AppPages.RootPage} component={HomePage} />
        <Route path={AppPages.LoginPage} component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  );
}
