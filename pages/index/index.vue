<template>
	<view>
		<HomeHeader></HomeHeader>
	</view>
</template>

<script>
	import hooks from '@/mixins/hooks.js'
	import HomeHeader from '@/components/home/HomeHeader.vue'
	export default {
		components: {
			HomeHeader
		},
		//#ifdef MP-WEIXIN
		mixins: [hooks],
		//#endif
	}
</script>

<style>
</style>
