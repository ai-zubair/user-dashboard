export namespace ModuleLoaders{
  export const landingLoader = () => import(
    /* webpackChunkName: "Landing" */
    /* webpackPrefetch: true */
    '../components/Landing');
}