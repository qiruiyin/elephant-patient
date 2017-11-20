<!-- 
	用户中心
 -->

<template>
	<div class="user-center">
		<header>
			<img src="~assets/img/header.png" alt="头像">
			<div class="info">
				<p>{{ user.name }}</p>
				<span v-if="user.img">{{ user.mobile }}</span>
				<div v-if="!user.img" class="user-btn">
					<div class="user-btn-set">注册/设置手机号</div>
					<label>方便医生联系你</label>
				</div>
			</div>
		</header>

		<main>
			<group>
	      <cell v-for="(item, index) in menus" :key="index" :title="item.name" @click.native="checkLogin({name: item.link}, item.click)" is-link>
	      	<div slot="icon" :class="['icon-setup', 'icon', 'icon-user-' + item.icon]"></div>
	      	<div class="member-rights" slot="default">{{ item.desc }}</div>
	      </cell>
	    </group>
		</main>
	</div>
</template>

<script type="text/babel">
	import { Group, Cell } from "vux"

	export default {
		name: "user",
		components: {
			Group, Cell
		},
		data () {
			return {
				title: "用户中心",
				user: {
					img: "",
					name: "飞翔的云",
					mobile: "18052607755"
				},
				menus: [
					{
						icon: "",
						name: "我的一问一答",
						link: "",
						click: true
					},{
						icon: "",
						name: "优惠券",
						link: "",
						click: true
					}
				]
			}
		},
		methods: {
			checkLogin (link, status) {

			}
		}
	}
</script>

<style lang="scss">
  @import '~lib/sandal/core';
  @import '~assets/css/core/functions', '~assets/css/core/mixins', '~assets/css/core/vars';
  
	.user-center {

	}

	header {
		padding: 20px $paddingL;
		background: $fontColorBlue url(~assets/img/user-bg.png) no-repeat;
		background-size: auto 100%;
		color: #fff;
		display: flex;

		img {
			width: $doctorImgW + 10px;
			height: $doctorImgW + 10px;
			border-radius: $doctorImgW;
		}

		.info {
			line-height: 1.75;
			padding-left: 15px;
		}

		p {
			margin-bottom: 4px;
			font-size: $fontSizeH1;
		}

		span {
			font-size: $fontSizeTips;
		}

		.user-btn {
			.user-btn-set {
				padding: 0 .5em;
				margin-right: .5em;
				background: #fff;
				color: $fontColorBlue;
				border-radius: $borderRadius;
				display: inline-block;
			}

			label {
				font-size: $fontSizeTips;
			}
		}
	}
</style>