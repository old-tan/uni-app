<template>
	<view id="test">
		<view>这是test组件{{num}}</view>
		<view>这是父组件传递过来的数据{{title}}</view>
		<button @click="sendNum">给父组件传值</button>
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
		props:['title'],
		methods:{
			sendNum(){
				console.log('给父组件传值')
				this.$emit('myEvent',this.num)
			}
		},
		beforeCreate() {
			console.log('实例已经开始初始化了')
			console.log(this.num)
		},
		created() {
			// 数据初始化
			console.log('created',this.num)
			// this.initId = setInterval(() => {
			// 	console.log('执行定时器')
			// },1000)
		},
		beforeMount() {
			// console.log('beforeMount',document.getElementById('test'))
		},
		mounted() {
			// 操作 dom
			// console.log('mounted',document.getElementById('test'))
		},
		destroyed() {
			console.log('组件销毁了')
			clearInterval(this.initId)
		}
	}
</script>

<style>
</style>
