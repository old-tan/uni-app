<template>
	<view>
		<view>这是列表页</view>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
		<button type="primary" @click="pullDown">触发下拉</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['前端','JAVA','UI','测试','大数据']
			}
		},
		onLoad(options) {
			console.log(options)
			console.log('页面加载了')
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(() => {
				this.list = ['前端','大数据','测试','JAVA','UI']
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			console.log('页面触底了')
			this.list = [...this.list,...['前端','大数据','测试','JAVA','UI']]
		},
		methods: {
			pullDown() {
				uni.startPullDownRefresh()
			}
		}
	}
</script>

<style>
	.box-item {
		height: 250rpx;
		line-height: 250rpx;
	}
</style>
