<!-- 
	tab
 -->

<template>
	<div class="tab">
		<div v-transfer-dom>
			<div class="tab-header">
				<div @click="itemClick(item, index)" :class="['tab-item', {'active': menuStatus && tabSelected == index}]" v-for="(item, index) in list" :key="index">{{ item.name }}
					<i></i>
				</div>
			</div>

			<popup class="tab-content" v-model="menuStatus" position="top">
				<ul>
					<li :class="[{'active': list[tabSelected].selected == index}]" @click="itemMenuClick(item, index)" v-for="(item, index) in list[tabSelected].list">{{ item.name }}</li>
				</ul>
			</popup>
		</div>
	</div>
</template>

<script type="text/babel">
	import { TransferDom, Popup } from "vux"

	export default {
		name: "elTab",
		directives: {
	    TransferDom
	  },
		components: {
			Popup
		},
		data () {
			return {
				list: [
					{
						name: "科室",
						value: "1",
						selected: 0,
						list: [
							{
								name: "全部",
								value: "",
							},{
								name: "女性健康",
								value: "1",
							},{
								name: "备孕怀孕",
								value: "2",
							},{
								name: "医疗美容",
								value: "3",
							},{
								name: "心理健康",
								value: "4",
							},{
								name: "疾病的预防",
								value: "5",
							},
						]
					},{
						name: "职称",
						value: "2",
						selected: 0,
						list: [
							{
								name: "全部",
								value: "",
							},{
								name: "女性健康1",
								value: "1",
							},{
								name: "备孕怀孕1",
								value: "2",
							},{
								name: "医疗美容1",
								value: "3",
							},{
								name: "心理健康1",
								value: "4",
							},{
								name: "疾病的预防1",
								value: "5",
							},
						]
					}
				],
				tabSelected: 0, // 此处使用排序
				listSelected: 0,
				menuStatus: false
			}
		},
		methods: {
			itemClick (data, ind) {
				this.tabSelected = ind;
				this.menuStatus = true;
			},
			itemMenuClick (data, ind) {
				this.list[this.tabSelected].selected = ind;
				this.menuStatus = false;
				this.$emit("on-data-change", data);
			}
		}
	}
</script>

<style lang="scss">
	@import '~lib/sandal/core';
	@import '~assets/css/core/functions', '~assets/css/core/mixins', '~assets/css/core/vars';
	
	$tabH: 50px;

	.tab {
		height: $tabH;
	}

	.tab-header {
		position: fixed;
		top: 0;
		width: 100%;
		height: $tabH;
		line-height: $tabH;
		background: #fff;
		text-align: center;
		z-index: 502;
		display: flex;
		border-bottom: 1px solid $borderColor;
	}

	.tab-item {
		position: relative;
		flex: 1;
		font-size: $fontSizeH1;
		line-height: $tabH;

		&.active {
			color: $fontColorBlue;

			i {
				background-image: url(~assets/img/arrow-up.png);
			}
		}

		i {
			width: 14px;
			height: 10px;
			background: url(~assets/img/arrow-down.png) no-repeat;
			background-size: 100%;
			display: inline-block;
		}
	}

	.tab-content {
		margin-top: $tabH;

		ul {
			padding: $paddingL 0 0 $paddingL;
			background: #fff;
		}

		li {
			line-height: 30px;
			padding: 0 1em;
			margin-right: $paddingL;
			margin-bottom: $paddingL;
			background: $bg;
			border: 1px solid transparent;
			border-radius: 30px;
			display: inline-block;

			&.active {
				border-color: $fontColorBlue;
				color: $fontColorBlue;
				background: none;
			}
		}
	}
</style>
