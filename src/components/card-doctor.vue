<!-- 
	医生块
 -->

<template>
	<div class="card-doctor">
		<div class="card-doctor-left">
			<img src="~assets/img/header.png" alt="头像">
			<p>{{ data.num }}</p>
			<label>问诊量</label>
		</div>
		<div class="card-doctor-right">
			<h1>
				<p>{{ data.name }}</p>
				<label v-for="(item, index) in data.label" :key="index">{{ item }}</label>
			</h1>
			<div class="positon-title">
				<label>{{ data.position }}</label>
				<label>{{ data.title }}</label>
			</div>
			<div class="hospital">{{ data.hospital }}</div>
			<div class="profit"><span>擅长：</span>{{ data.profit }}</div>
		</div>
	</div>
</template>

<script type="text/babel">
	export default {
		name: "elCardDoctor",
		data () {
			return {
				data: {
					img: "",
					name: "王文琴",
					label: ["权威医生", "大象暖医"],
					hospital: "上海市妇幼保健医院",
					position: "妇幼保健科", // 科室
					title: "副主任医师", // 职称
					num: "2260", // 问诊量
					// 擅长
					profit: "呼吸道感染，冬季流行性感冒问题。坚持中医的望闻问切，注重调理和增强免疫力。"
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '~lib/sandal/core';
	@import '~assets/css/core/functions', '~assets/css/core/mixins', '~assets/css/core/vars';
	
	@import '~assets/css/card-doctor';
	
</style>