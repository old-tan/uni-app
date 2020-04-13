
// const BASE_URL = 'http://localhost:8082'
const BASE_URL = 'http://jsonplaceholder.typicode.com'

export const myRequest = () => {
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			header: {
				'content-type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8'
			},
			success: (res) => {
				if(res.statusCode !== 200){
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}