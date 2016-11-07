import App from '../App';
import Index from '../pages/index';
import Login from '../pages/login';
import Signout from '../pages/signout';
import Blog from '../pages/blog';
import Tags from '../pages/tags';
import Categories from '../pages/categories';
import About from '../pages/about';

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/signout',
        component: Signout,
      },
      {
        path: '/blog',
        component: Blog,
      },
      {
        path: '/tags',
        component: Tags,
      },
      {
        path: '/categories',
        component: Categories,
      },
      {
        path: '/about',
        component: About,
      },
      // {
      //   path: '/',
      //   meta: { auth: false },
      //   component: resolve => require(['../pages/index'], resolve)
      // },
      // {
      //   path: '*',
      //   redirect: '/login'
      // }
    ],
  },
];
