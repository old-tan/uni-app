<template>
	<view class="contact">
		<image class="img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1697874191,347359651&fm=26&gp=0.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：18510345312</view>
			<view>地址：北京市海淀区光华创业园</view>
		</view>
		<map name="" class="map" :latitude="latitude" :scale="scale" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 40.04423,
				longitude: 116.332596,
				scale: 15,
				covers: [
					{
						latitude: 40.04423,
						longitude: 116.332596,
						iconPath: '../../static/mark.png',
						width: 50,
						height: 50
					},
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: '18510345312'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		.info {
			padding: 15rpx;
			font-size: 30rpx;
			view {
				margin: 10rpx 0;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
