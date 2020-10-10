// 视图组件
const view = {
    tabs: () => import('@/layouts/tabs'),
    blank: () => import('@/layouts/BlankView'),
    page: () => import('@/layouts/PageView'),
    login:() => import('@/pages/login'),
    workplace: () => import('@/pages/dashboard/workplace'),
    analysis: () => import('@/pages/dashboard/analysis'),
    basic: () => import('@/pages/form/basic'),
    step: () => import('@/pages/form/step'),
    advance: () => import('@/pages/form/advance'),
    queryList: () => import('@/pages/list/QueryList'),
    standardList: () => import('@/pages/list/StandardList'),
    cardList: () => import('@/pages/list/CardList'),
    searchList: () => import('@/pages/list/search/SearchLayout'),
    articleList: () => import('@/pages/list/search/ArticleList'),
    applicationList: () => import('@/pages/list/search/ApplicationList'),
    projectList: () => import('@/pages/list/search/ProjectList'),
    basicDetail: () => import('@/pages/detail/BasicDetail'),
    advancedDetail: () => import('@/pages/detail/AdvancedDetail'),
    contract:()=>import('@/pages/crm/contract/List'),
    success: () => import('@/pages/result/Success'),
    error: () => import('@/pages/result/Error'),
    exp403: () => import('@/pages/exception/403'),
    exp404: () => import('@/pages/exception/404'),
    exp500: () => import('@/pages/exception/500'),
    taskCard: () => import('@/pages/components/TaskCard'),
    palette: () => import('@/pages/components/Palette'),
};

// 路由组件注册
const routerMap = {
    login: {
        authority: '*',
        path: '/login',
        component: view.login
    },
    root: {
        path: '/',
        name: '首页',
        redirect: '/login',
        component: view.tabs,
    },
    dashboard: {
        name: 'Dashboard',
        icon: 'dashboard',
        component: view.blank,
    },
    workplace: {
        name: '工作台',
        component: view.workplace,
    },
    crm:{
        name: '商务管理',
        icon: 'dashboard',
        component: view.page,
    },
    contract:{
        name:'合同管理',
        component:view.contract
    },
    analysis: {
        name: '卢立法',
        component: view.analysis,
    },
    form: {
        name: '表单页',
        icon: 'form',
        component: view.page,
    },
    basicForm: {
        path: 'basic',
        name: '基础表单',
        component: view.basic,
    },
    stepForm: {
        path: 'step',
        name: '分步表单',
        component: view.step,
    },
    advanceForm: {
        path: 'advance',
        name: '高级表单',
        component: view.advance,
    },
    list: {
        name: '列表页',
        icon: 'table',
        component: view.page,
    },
    queryList: {
        path: 'query',
        name: '查询表格',
        component: view.queryList,
    },
    primaryList: {
        path: 'primary',
        name: '标准列表',
        component: view.standardList,
    },
    cardList: {
        path: 'card',
        name: '卡片列表',
        component: view.cardList,
    },
    searchList: {
        path: 'search',
        name: '搜索列表',
        component: view.searchList,
    },
    article: {
        name: '文章',
        component: view.articleList,
    },
    application: {
        name: '应用',
        component: view.applicationList,
    },
    project: {
        name: '项目',
        component: view.projectList,
    },
    details: {
        name: '详情页',
        icon: 'profile',
        component: view.blank,
    },
    basicDetails: {
        path: 'basic',
        name: '基础详情页',
        component: view.basicDetail,
    },
    advanceDetails: {
        path: 'advance',
        name: '高级详情页',
        component: view.advancedDetail,
    },
    result: {
        name: '结果页',
        icon: 'check-circle-o',
        component: view.page,
    },
    success: {
        name: '成功',
        component: view.success,
    },
    error: {
        name: '失败',
        component: view.error,
    },
    exception: {
        name: '异常页',
        icon: 'warning',
        component: view.blank,
    },
    exp403: {
        authority: '*',
        name: 'exp403',
        path: '403',
        component: view.exp403,
    },
    exp404: {
        name: 'exp404',
        path: '404',
        component: view.exp404,
    },
    exp500: {
        name: 'exp500',
        path: '500',
        component: view.exp500,
    },
    components: {
        name: '小组件',
        icon: 'appstore-o',
        component: view.page,
    },
    taskCard: {
        name: '任务卡片',
        component: view.taskCard,
    },
    palette: {
        name: '颜色复选框',
        component: view.palette,
    },
};
export default routerMap;
