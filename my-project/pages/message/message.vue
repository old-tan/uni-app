<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		
		<image v-for="item in imgArr"  :src="item" :key="item" @click="previewImg(item)"></image>
		<!-- #ifdef H5 -->
		<view>我希望在H5中显示</view>
		<!-- #endif -->
		
		
		<!-- #ifdef MP-WEIXIN -->
		<view>我希望在微信小程序中显示</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: []
			}
		},
		methods: {
			chooseImg (){
				// console.log('上传图片')
				uni.chooseImage({
				    count: 4, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res => {
						console.log(res)
						this.imgArr = res.tempFiles.map(item => {
							return item.path
						})
				        // console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			previewImg(current) {
				console.log(current)
				uni.previewImage({
					current: current.path,
					urls: this.imgArr
				});
			}
		},
		onLoad() {
			// #ifdef H5
			console.log('我希望在H5中打印')
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log('我希望在微信小程序中打印')
			// #endif
		}
	}
</script>

<style>
	/* H5 中的样式 */
	/* #ifdef H5 */
	view {
		color: #007AFF;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	view {
		color: #4CD964;
	}
	/* #endif */
</style>
