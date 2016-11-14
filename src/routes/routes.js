import App from '../App';
import Index from '../pages/index';
import Login from '../pages/login';
import Signout from '../pages/signout';
import Blog from '../pages/blog';
import Content from '../pages/content';
import About from '../pages/about';
import Sidebar from '../components/Sidebar';

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        name: 'home',
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
        name: 'blog',
        components: {
          sidebar: Sidebar,
          content: Blog
        },
      },
      {
        path: '/tags',
        meta: {name: 'tags'},
        components: {
          sidebar: Sidebar,
          content: Content
        },
      },
      {
        path: '/archives',
        meta: {name: 'archives'},
        components: {
          sidebar: Sidebar,
          content: Content
        },
      },
      {
        path: '/categories',
        meta: {name: 'categories'},
        components: {
          sidebar: Sidebar,
          content: Content
        },
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
