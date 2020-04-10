<template>
	<view>
		<navigator url="/pages/detail/detail?id=80" hover-class="navigator-hover">跳转至详情页</navigator>
		<navigator url="/pages/message/message" hover-class="navigator-hover" open-type="switchTab">message</navigator>
		<navigator url="/pages/detail/detail" hover-class="navigator-hover" open-type="redirect">跳转至详情页</navigator>
		<button type="default" @click="goDetail">跳转至详情页</button>
		<button type="default" @click="goMessage">跳转至message</button>
	</view>
</template>

<script>
	export default {
		onUnload() {
			console.log('导航页面卸载了')
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '../detail/detail?id=80'
				})
				
				// 跳转至详情页并关闭当前页
				// uni.redirectTo({
				// 	url: '../detail/detail'
				// })
			},
			goMessage() {
				uni.switchTab({
					url: '../message/message'
				})
			}
		}
	}
</script>

<style>
	.navigator-hover {
		color: #4CD964;
	}
</style>
