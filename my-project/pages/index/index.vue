<template>
	<view class="content">
		<test v-if="flag"></test>
		<button type="default" @click="checkTest">切换test组件</button>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag: true
			}
		},
		onLoad(options) {
			console.log(options)
			console.log('页面加载了')
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			checkTest(){
				this.flag = !this.flag
			}
		},
		components: {
			test,
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
