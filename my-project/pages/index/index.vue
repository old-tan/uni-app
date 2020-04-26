<template>
	<view class="home">
		<!-- swiper -->
		<swiper-box :banners="banners"></swiper-box>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="toGoods(item.path)">
				<view class="img_box">
					<image :src="item.iconPath"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 文明快讯 -->
		<!-- <view class="hot_goods">
			<view class="title">热门商品</view>
			<goods-list :goods="goods"></goods-list>
		</view> -->
		<view class="news">
			<view class="news_title">文明快讯<span></span></view>
			<view class="news_list">
				<view class="news_item" v-for="(item,index) in news" :key="index">
					<view class="news_img">
						<image :src="item.src"></image>
					</view>
					<view class="txt">
						<view>{{item.desc}}</view>
						<text>{{item.time}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 悬浮按钮 -->
		<view class="fab" @click="join"></view>
	</view>
</template>

<script>
	import swiperBox from '../../components/swiper/swiper.vue'
	import goodsList from '../../components/goods/goods-list.vue'
	export default {
		components: {
			'goods-list': goodsList,
			'swiper-box': swiperBox,
		},
		data() {
			return {
				// indicatorColor: 'rgba(255,255,255,.65)',
				// indicatorActiveColor: 'rgba(255,255,255,1)',
				// autoplay: true,
				// interval: 2000,
				// duration: 500,
				goods: [],
				news:[
					{
						src: '../../static/news/n1.png',
						desc: '为大力宣传普及习近平新时代中国特色社会主义思想，积极响应国家政策政策政策政策政策',
						time: '2020-04-03'
					},
					{
						src: '../../static/news/n2.png',
						desc: '为大力宣传普及习近平新时代中国特色社会主义思想',
						time: '2020-04-03'
					},
					{
						src: '../../static/news/n1.png',
						desc: '为大力宣传普及习近平新时代中国特色社会主义思想，积极响应国家政策政策政策政策政策',
						time: '2020-04-03'
					}
				],
				banners: [
					{
						src: '../../static/banner/banner1.png'
					},
					{
						src: '../../static/banner/banner1.png'
					},
					{
						src: '../../static/banner/banner1.png'
					}
				],
				navs: [
					{
						iconPath: '../../static/icon/icon-practice.png',
						title: '实践阵地',
						path: '/pages/practice/practice'
					},
					{
						iconPath: '../../static/icon/icon-civilization.png',
						title: '文明使者',
						path: '/pages/civilization/civilization'
					},
					{
						iconPath: '../../static/icon/icon-policy.png',
						title: '政策中心',
						path: '/pages/policy/policy'
					}
				]
			}
		},
		
		// components: {'swiper-box': swiperBox},
		onLoad() {
			this.getUser()
		},
		methods: {
			async getUser() {
				const res = await this.$myRequest({
					url: '/photos'
				})
				res.data.forEach((item,index) => {
					if(index<10){
						this.goods.push(
							{
								id: item.id,
								url: item.url,
								thumbnailUrl: item.thumbnailUrl
							}
						)
					}
				})
				console.log(this.goods)
			},
			toGoods(path) {
				uni.navigateTo({
					url: path
				})
			},
			join() { // 申请加入
				uni.navigateTo({
					url:'../join/join'
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		font-family: "PingFangSC-Semibold";
		background-color: $body-color;
		swiper {
			padding: 20rpx;
			height: 300rpx;
			background:linear-gradient(#FF4B30,#F99842,#F5F5F5);
			image {
				width: 100%;
				height: 100%;
			}
		}
		.nav {
			display: flex;
			margin: 0 20rpx 20rpx;
			padding: 30rpx 0;
			border-radius: 10rpx;
			background-color: #fff;
			.nav-item {
				width: 33.3333%;
				text-align: center;
				.img_box {
					height: 90rpx;
					image {
						width: 90rpx;
						height: 100%;
					}
				}
				text {
					font-size: 28rpx;
					color: #333333;
				}
			}
		}
		.news {
			margin: 0 20rpx;
			padding: 5rpx 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			.news_title {
				font-size: 28rpx;
				font-weight: bolder;
				color: #FF4B30;
				padding: 26rpx 0;
				span {
					float: right;
					margin-top: 6rpx;
					width: 16rpx;
					height: 26rpx;
					background: url(../../static/icon/title-right.png) no-repeat;
					background-size: cover;
				}
			}
			.news_title:before {
				margin: 6rpx 10rpx 0 0;
				display: inline-block;
				vertical-align: top;
				content: '';
				width: 8rpx;
				height: 28rpx;
				background: url(../../static/icon/title-before.png) no-repeat;
				background-size: cover;
			}
			.news_item {
				padding: 26rpx 0;
				display: flex;
				justify-content: space-between;
				border-top: 1px solid #E5E5E5;
				.news_img {
					image {
						width: 197rpx;
						height: 122rpx;
					}
				}
				.txt {
					padding-left: 20rpx;
					view {
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 28rpx;
						color: #333;
					}
					text {
						font-size: 26rpx;
						color: #999;
					}
				}
			}
		}
		.fab {
			width: 114rpx;
			height: 114rpx;
			background: url(../../static/icon/enjoy.png) no-repeat;
			background-size: cover;
			position: fixed;
			right: 18rpx;
			bottom: 130rpx;
			z-index: 999;
		}
		// #ifdef MP-WEIXIN
		.fab {
			bottom: 30rpx;
			z-index: 999;
		}
		// #endif
	}
</style>
