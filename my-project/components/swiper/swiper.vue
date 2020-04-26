<template>
	<view>
		<swiper indicator-dots circular :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor" autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in banners" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorColor: 'rgba(255,255,255,.65)',
				indicatorActiveColor: 'rgba(255,255,255,1)',
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		props: ['banners'],
		methods: {
			
		}
	}
</script>

<style lang="scss">
	swiper {
		padding: 20rpx;
		height: 300rpx;
		background:linear-gradient(#FF4B30,#F99842,#F5F5F5);
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
