<template>
	<view class="practice">
		<view class="practice_item" v-for="item in list" :key="item.id">
			<view class="til">{{item.title}}</view>
			<view class="img">
				<image :src="item.src"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id: 1,
						title: '镇实践所',
						src: '../../static/images/p1.png'
					},
					{
						id: 2,
						title: '村实践站',
						src: '../../static/images/p1.png'
					},
					{
						id: 3,
						title: '镇实践所',
						src: '../../static/images/p1.png'
					},
					{
						id: 4,
						title: '文明公园',
						src: '../../static/images/p1.png'
					},
					{
						id: 5,
						title: '文明广场',
						src: '../../static/images/p1.png'
					},
					{
						id: 6,
						title: '文明小院',
						src: '../../static/images/p1.png'
					},
					{
						id: 7,
						title: '文明大街',
						src: '../../static/images/p1.png'
					}
				]
			}
		},
		methods: {
			async getData(){
				const res = await this.$myRequest({
					url: '/photos'
				})
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	.practice {
		padding: 10rpx 20rpx;
		background-color: $body-color;
		.practice_item {
			margin-top: 20rpx;
			height: 176rpx;
			background-color: #fff;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			.til {
				width: 224rpx;
				line-height: 176rpx;
				font-size: 30rpx;
				color: #333;
				text-align: center;
			}
			.img {
				image {
					width: 486rpx;
					height: 176rpx;
				}
			}
		}
	}
</style>
