<template>
	<view class="user">
		<view class="user-detail">
			<view>
				<image :src="userSrc"></image>
				Mary
			</view>
			<view>意见反馈</view>
		</view>
		<view class="top-nav">
			<view class="nav-item" v-for="item in navs">
				<view>
					<image :src="item.iconPath"></image>
				</view>
				<view class="tiltle">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userSrc: '../../static/user/user.png',
				navs: [
					{
						iconPath: '../../static/user/nav1.png',
						title: '我的积分',
						path: '/pages/practice/practice'
					},
					{
						iconPath: '../../static/user/nav2.png',
						title: '服务星级',
						path: '/pages/civilization/civilization'
					},
					{
						iconPath: '../../static/user/nav3.png',
						title: '服务时长',
						path: '/pages/policy/policy'
					},
					{
						iconPath: '../../static/user/nav4.png',
						title: '积分排名',
						path: '/pages/practice/practice'
					},
					{
						iconPath: '../../static/user/nav5.png',
						title: '积分兑换',
						path: '/pages/civilization/civilization'
					},
					{
						iconPath: '../../static/user/nav6.png',
						title: '申请成为志愿者',
						path: '/pages/policy/policy'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background-color: $body-color;
	}
	.user {
		
	}
	.user-detail {
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		height: 286rpx;
		background:linear-gradient(#FF4B30,#F99842,#F5F5F5);
		view {
			height: 114rpx;
			display: flex;
			align-items: center;
		}
		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
	.top-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: -97rpx 20rpx 0;
		padding: 40rpx 5rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		.nav-item {
			flex: 0 0 calc(33.3333%);
			display: flex;/*Flex布局*/
			display: -webkit-flex; /* Safari */
			flex-direction: column;
			align-items: center;/*指定垂直居中*/
			padding-bottom: 45rpx;
			.tiltle {
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}
			view {
				image {
					width: 74rpx;
					height: 74rpx;
				}
			}
			
		}
	}
</style>
