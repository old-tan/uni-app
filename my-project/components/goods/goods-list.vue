<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id">
			<image :src="item.thumbnailUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods']
	}
</script>

<style lang="scss">
	
</style>
