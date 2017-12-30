export default [

    //{
    //    path: '/dynamic-route/blog/:blogId/post/:postId/',
    //    component: require('./pages/dynamic-route.vue')
    //},
    {
        path: '/home/',
        component: require('./pages/home.vue')
    },
    {
        path: '/worker',
        component: require('./pages/worker.vue')
    },
    {
        path: '/workerDetail',
        component: require('./pages/worker/detail.vue')
    },
    {
        path: '/resources',
        component: require('./pages/resources.vue')
    },
    {
        path: '/resourcesDetail',
        component: require('./pages/resources/detail.vue')
    },
    {
        path: '/mine',
        component: require('./pages/mine.vue')
    },
    {
        path: '/calendar/:title',
        component: require('./pages/mine/calendar.vue')
    },
    {
        path: '/favorite/:title',
        component: require('./pages/mine/favorite.vue')
    },
    {
        path: '/history',
        component: require('./pages/mine/history.vue')
    }

]