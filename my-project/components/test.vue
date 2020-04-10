<template>
	<view id="test">
		这是test组件{{num}}
	</view>
</template>

<script>
	export default {
		data () {
			return {
				num: 3,
				initId: null
			}
		},
		beforeCreate() {
			console.log('实例已经开始初始化了')
			console.log(this.num)
		},
		created() {
			// 数据初始化
			console.log('created',this.num)
			this.initId = setInterval(() => {
				console.log('执行定时器')
			},1000)
		},
		beforeMount() {
			console.log('beforeMount',document.getElementById('test'))
		},
		mounted() {
			// 操作 dom
			console.log('mounted',document.getElementById('test'))
		},
		destroyed() {
			console.log('组件销毁了')
			clearInterval(this.initId)
		}
	}
</script>

<style>
</style>
