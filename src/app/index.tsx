/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './containers/pages/Home/Loadable';
import { NotFoundPage } from './containers/pages/NotFound/Loadable';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { BlockChain } from "./containers/BlockChain/Loadable";
import { AppPages } from "./types";

export function App() {
  const { t } = useTranslation();

  return (
    <>
      <BlockChain />
      <Helmet
        titleTemplate="%s - Snowball"
        defaultTitle={t(translations.HomePage.home())}
      >
        <meta name="description" content="Snowball" />
      </Helmet>
      <Switch>
        <Route exact path={AppPages.RootPage} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
