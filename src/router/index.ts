import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from '../services/auth/router/index';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...authRoutes,
        // {
        //     path: '/',
        //     name: 'login',
        //     meta: {
        //         title: 'Login',
        //     },
        //     component: () => import('@/views/autenticate/LoginView.vue'),
        // },
        {
            path: '/app',
            name: 'application',
            component: () => import('@/templates/base/index.vue'),
            children: [
                {
                    path: '/app/dashboard',
                    name: 'dashboard',
                    meta: {
                        title: 'Dashboard',
                    },
                    component: () => import('@/views/dashboard/DashboardView.vue'),
                },
                //   {
                //     path: '',
                //     name: '',
                //     component: ,
                //   },
            ],
        },
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;

    //     const publicPages = ['/login', '/register'];
    //     const authRequired = !publicPages.includes(to.path);
    //     const loggedIn = localStorage.getItem('user');

    //     if (authRequired && !loggedIn) {
    //     return next('/login');
    //   }
    next();
});

export default router;
