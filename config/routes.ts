export default [
    {
        path: '/',
        component: './Index',
        routes: [
            {
                path: '/realtime',
                name: '实时结果',
                component: './Realtime',
            },
            {
                path: '*',
                redirect: '/realtime',
            }
        ]
    },
    {
        path: '*',
        component: './Realtime',
    }
];
