<template>
	<view class="content">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			{{ item.state }}
		</view>
	</view>
</template>

<script>

export default {
	components: {
		
	},
	data() {
		return {
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部',
					orderList: []
				},
				{
					state: 1,
					text: '待付款',
					orderList: []
				},
				{
					state: 2,
					text: '待收货',
					orderList: []
				},
				{
					state: 3,
					text: '待评价',
					orderList: []
				},
				{
					state: 4,
					text: '售后',
					orderList: []
				}
			]
		};
	},

	onLoad(options) {
		// 页面显示是默认选中第一个
		this.tabCurrentIndex = 0;
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
};
</script>

<style lang="scss">
page,
.content {
	background: $body-color;
	height: 100%;
}

.swiper-box {
	height: calc(100% - 40px);
}
.list-scroll-content {
	height: 100%;
}

.navbar {
	display: flex;
	height: 40px;
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
		font-size: 15px;
		color: $uni-text-color;
		position: relative;
		&.current {
			color: $uni-text-color-high;
			&:after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				width: 44px;
				height: 0;
				border-bottom: 2px solid $uni-text-color-high;
			}
		}
	}
}

.uni-swiper-item {
	height: auto;
}
.order-item {
	display: flex;
	flex-direction: column;
	padding-left: 30upx;
	background: #fff;
	margin-top: 16upx;
	.i-top {
		display: flex;
		align-items: center;
		height: 80upx;
		padding-right: 30upx;
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		position: relative;
		.time {
			flex: 1;
		}
		.state {
			color: $uni-text-color-high;
		}
		.del-btn {
			padding: 10upx 0 10upx 36upx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;
			position: relative;
			&:after {
				content: '';
				width: 0;
				height: 30upx;
				border-left: 1px solid $uni-border-color;
				position: absolute;
				left: 20upx;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	/* 多条商品 */
	.goods-box {
		height: 160upx;
		padding: 20upx 0;
		white-space: nowrap;
		.goods-item {
			width: 120upx;
			height: 120upx;
			display: inline-block;
			margin-right: 24upx;
		}
		.goods-img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	/* 单条商品 */
	.goods-box-single {
		display: flex;
		padding: 20upx 0;
		.goods-img {
			display: block;
			width: 120upx;
			height: 120upx;
		}
		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 0 30upx 0 24upx;
			overflow: hidden;
			.title {
				font-size: $uni-font-size-base;
				color: $uni-text-color;
				line-height: 1;
			}
			.attr-box {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				padding: 10upx 12upx;
			}
			.price {
				font-size: $uni-font-size-base;
				color: $uni-text-color;
				&:before {
					content: '￥';
					font-size: $uni-font-size-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
	}

	.price-box {
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		padding: 20upx 30upx;
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
		.num {
			margin: 0 8upx;
			color: $uni-text-color;
		}
		.price {
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			&:before {
				content: '￥';
				font-size: $uni-font-size-sm;
				margin: 0 2upx 0 8upx;
			}
		}
	}
	.action-box {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100upx;
		position: relative;
		padding-right: 30upx;
	}
	.action-btn {
		width: 160upx;
		height: 60upx;
		margin: 0;
		margin-left: 24upx;
		padding: 0;
		text-align: center;
		line-height: 60upx;
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
		background: #fff;
		border-radius: 100px;
		&:after {
			border-radius: 100px;
		}
		&.recom {
			background: #fff9f9;
			color: $uni-text-color-high;
			&:after {
				border-color: #f7bcc8;
			}
		}
	}
}
</style>
