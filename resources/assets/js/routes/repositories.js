import routeImporter from '../modules/importers/routeImporter';

const routes = routeImporter(require.context('./repositories', false, /.*\.js$/));
const RouterView = () => import('../pages/layout/Router.vue');

export default {
    path: '/repositories/',
    component: RouterView,
    meta: {
        breadcrumb: 'repositories',
        route: 'repositories.index',
    },
    children: routes,
};
