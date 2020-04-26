<template>
	<view class="civilization">
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
		
		<!-- 首页底部list封装为组件 -->
	</view>
</template>

<script>
	import swiperBox from '../../components/swiper/swiper.vue'
	export default {
		data() {
			return {
				
				banners: [
					{
						src: '../../static/banner/banner2.png'
					},
					{
						src: '../../static/banner/banner2.png'
					},
					{
						src: '../../static/banner/banner2.png'
					}
				],
				navs: [
					{
						iconPath: '../../static/icon/icon-practice.png',
						title: '志愿风采',
						path: '/pages/practice/practice'
					},
					{
						iconPath: '../../static/icon/icon-civilization.png',
						title: '规章制度',
						path: '/pages/civilization/civilization'
					},
					{
						iconPath: '../../static/icon/icon-policy.png',
						title: '队伍介绍',
						path: '/pages/policy/policy'
					},
					{
						iconPath: '../../static/icon/icon-policy.png',
						title: '志愿者统计',
						path: '/pages/policy/policy'
					}
				]
			}
		},
		components: {'swiper-box': swiperBox},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		.civilization {
			background-color: $body-color;
			height: 100%;
			.nav {
				display: flex;
				margin: 0 20rpx 20rpx;
				padding: 30rpx 0;
				border-radius: 10rpx;
				background-color: #fff;
				.nav-item {
					width: 25%;
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
		}
	}
</style>
