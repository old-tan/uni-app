<template>
	<view class="policy">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			<view class="list-item" v-for="obj in item.orderList">
				<view class="title">{{obj.title}}</view>
				<view class="content">{{obj.content}}</view>
				<view class="other">{{obj.other}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [
					{
						state: 0,
						text: '政策展示',
						orderList: [
							{
								title: '政策标题政策标题政策标题',
								content: '政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传，这里实际上属于城乡结合部，我们在市场内展...',
								other: '文字来源  2020-04-03  |  其他信息'
							},
							{
								title: '政策标题政策标题政策标题',
								content: '政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传政策展示内容我们在市场内外展开了反转基因科普宣传，这里实际上属于城乡结合部，我们在市场内展...',
								other: '文字来源  2020-04-03  |  其他信息'
							}
						]
					},
					{
						state: 1,
						text: '政策解读',
						orderList: []
					}
				]
			}
		},
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.policy {
		background: $body-color;
		height: 100%;
	}
	
	.navbar {
		display: flex;
		height: 90rpx;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 10;
		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30rpx;
			font-weight: bolder;
			color: $uni-text-color;
			position: relative;
			&.current {
				color: $uni-text-color-high;
				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: -4rpx;
					transform: translateX(-50%);
					width: 40rpx;
					height: 8rpx;
					background: url(../../static/icon/tab_on.png) no-repeat;
					background-size: cover;
				}
			}
		}
		
	}
	.list {
		padding: 24rpx 20rpx 0;
		.list-item {
			padding: 34rpx 30rpx;
			margin-bottom: 20rpx;
			background-color: #FFFFFF;
			position: relative;
			border-radius: 10rpx;
			&:before {
				content: '';
				width: 28rpx;
				height: 28rpx;
				background: url(../../static/icon/lt.png) no-repeat;
				background-size: cover;
				position: absolute;
				left: 0;
				top: 0;
			}
			.title {
				margin-bottom: 25rpx;
				font-weight: bolder;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
			}
			.content {
				margin-bottom: 20rpx;
				font-size: $uni-font-size-base;
				color: #444444;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.other {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				text-align: right;
			}
		}
	}
	
	
	
</style>
