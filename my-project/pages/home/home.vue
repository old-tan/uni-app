<template>
	<view>
		<view>数据绑定的学习</view>
		<view>{{msg}}</view>
		<view v-for="(item,index) in list" :key="item.id">
			序号：{{index}} 姓名：{{item.name}} 年龄：{{item.age}} 
		</view>
		<button type="primary" @click="clickHandle(20,$event)">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello',
				list: [
					{
						name: '赵四',
						age: 18,
						id: 1
					},
					{
						name: '刘能',
						age: 20,
						id: 2
					},
					{
						name: '谢广坤',
						age: 30,
						id: 3
					},
					{
						name: '宋晓峰',
						age: 16,
						id: 4
					}
				]
			}
		},
		methods:{
			clickHandle(num,e) {
				console.log('点击我了')
				console.log(num)
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
