<!-- 
	首页
 -->

<template>
	<div class="index">
		<el-tab @on-data-change="tabChange"></el-tab>
		<scroller lock-x :height="-scrollerInfo.offsetBottom + 'px'" @on-scroll-bottom="loadMore" ref="scrollerBottom" v-cloak>
			<div>
				<el-card-doctor></el-card-doctor>
				<el-load-more :load-all="scrollerInfo.loadAll"></el-load-more>			
			</div>
		</scroller>
	</div>
</template>

<script type="text/babel">
	import { Scroller } from 'vux'
	import elTab from 'components/tab'
	import elCardDoctor from 'components/card-doctor'
	import elLoadMore from 'components/load-more'

	export default {
		name: "index",
		components: {
			Scroller, elCardDoctor, elTab, elLoadMore
		},
		data () {
			return {
				title: "index",
				scrollerInfo: {
					offsetBottom: 50,
					onFetching: false,
					loadAll: true,
				}
			}
		},
		mounted () {
			this.fetchData();
		},
		methods: {
			fetchData () {

			},
			resetView () {
				let _this = this;
				this.$nextTick(() => {
          this.$refs.scrollerBottom.reset()
        })
			},
			loadMore () {
				if(this.scrollerInfo.onFetching || this.scrollerInfo.loadAll) {

				} else {
					this.fetchData();
				}
			},
			tabChange (data) {
				console.log(data);
			},
		}
	}
</script>

<style lang="scss">
	@import '~lib/sandal/core';
  @import '~assets/css/core/functions', '~assets/css/core/mixins', '~assets/css/core/vars';
  
  .index {
  	min-height: 100%;
  	background: $bg;
  }
</style>