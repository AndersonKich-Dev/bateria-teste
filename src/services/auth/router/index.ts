const authRoutes = [
    {
        path: '/',
        name: 'login',
        meta: {
            title: 'Login',
        },
        component: () => import('../views/LoginView.vue'),
    },
];
export default authRoutes;
