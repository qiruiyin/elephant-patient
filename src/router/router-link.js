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
			title: '大象医生'
		}
	},{
		path: '/user',
		name: 'user',
		component:  loadView(loaded => {
			require(['../modules/user/user.vue'], loaded)
		}),
		meta: {
			title: '个人中心'
		}
	},{
		path: '/refund',
		name: 'refund',
		component:  loadView(loaded => {
			require(['../modules/user/refund.vue'], loaded)
		}),
		meta: {
			title: '申请退款'
		}
	},{
		path: '/interlocution',
		name: 'interlocution',
		component:  loadView(loaded => {
			require(['../modules/user/interlocution.vue'], loaded)
		}),
		meta: {
			title: '申请退款'
		}
	},

]

export default routes