export namespace ModuleLoaders{

  export const adminAuthLoader = () => import(
    /* webpackChunkName: "AdminAuth" */
    /* webpackPrefetch: true */
    '../components/AdminAuth/AdminAuth'
  )

  export const dashboardLoader = () => import(
    /* webpackChunkName: "Dashboard" */
    /* webpackPrefetch: true */
    '../components/Dashboard/Dashboard');

  export const createUserLoader = () => import(
    /* webpackChunkName: "Dashboard" */
    /* webpackPrefetch: true */
    '../components/CreateUser/CreateUser');
}