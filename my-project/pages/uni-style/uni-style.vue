<template>
	<view>
		<view>
			样式的学习
		</view>
		<view class="box">
			测试文字
		</view>
		<view class="box1">
			测试文字2
			<text>123</text>
		</view>
		<view class="iconfont iconicon-test"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import url("./a.css");
	.box {
		width: 375rpx;
		height: 375rpx;
		background-color: #007AFF;
		font-size: 30rpx;
		color: #FFFFFF;
	}
	.box1 {
		text {
			color: $uni-color-primary;
		}
	}
</style>
