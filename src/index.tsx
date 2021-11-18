/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import * as serviceWorker from 'serviceWorker';
import 'sanitize.css/sanitize.css';
import { history } from 'utils/history';
// Initialize languages
import './locales/i18n';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import { toast, Zoom } from 'react-toastify';
import { theme } from "styles/theme";
// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore({}, history);
const MOUNT_NODE = document.getElementById('Skeleton') as HTMLElement;

interface Props {
  Component: typeof App;
}



toast.configure({
  autoClose: 6000,
  draggable: true,
  pauseOnHover: true,
  rtl: false,
  transition: Zoom,
  position: 'bottom-right',
  hideProgressBar: true,
});



const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <MaterialThemeProvider theme={theme}>
      <HelmetProvider>
        <Component />
      </HelmetProvider>
    </MaterialThemeProvider>
  </Provider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// make it pwa
serviceWorker.register();
