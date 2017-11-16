// 路由到path

import loadView from './async-view-loader'

const routes = [
	{
		path: '*',
		redirect: '/index' 
	},{
		path: '/index',
		name: 'index',
		component:  loadView(loaded => {
			require(['../modules/index/index.vue'], loaded)
		}),
		meta: {
			title: '大象医生',
			routerTitle: '公众号首页'
		}
	}
]

export default routes