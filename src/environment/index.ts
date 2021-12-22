export const IS_DEV = process.env.NODE_ENV !== 'production';

export const env = {
  ANALYTICS_ENDPOINT: process.env.REACT_APP_ANALYTICS_ENDPOINT,
  ANALYTICS_SITE_ID: process.env.REACT_APP_ANALYTICS_SITE_ID,
  APIADDR: process.env.REACT_APP_APIADDR,
  APPNAME: process.env.REACT_APP_APPNAME,
  DEVAPIADDR: process.env.REACT_APP_DEVAPIADDR,
  IPFS_API_URL: process.env.REACT_APP_IPFS_API_URL,
  LOCALNODE: process.env.REACT_APP_LOCALNODE,
  NETWORK: process.env.REACT_APP_NETWORK,
  PRIVATENODE: process.env.REACT_APP_PRIVATENODE,
}