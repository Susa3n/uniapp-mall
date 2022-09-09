<template>
	<view class="container">
		头部
	</view>
</template>

<script>
	import {getBundleList} from '@/api/home/index.js'
	export default {
		name: 'HomeHeader',
		mounted() {
			getBundleList().then(result => {
				console.log(result);
			})
		}
	}
</script>

<style>
</style>