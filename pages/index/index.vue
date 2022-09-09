<template>
	<view>
		<view>
			<HomeHeader></HomeHeader>
		</view>
		<view>
			<HomeContent></HomeContent>
		</view>
	</view>
</template>

<script>
	import hooks from '@/mixins/hooks.js'
	import HomeHeader from '@/components/home/HomeHeader.vue'
	import HomeContent from '@/components/home/HomeContent.vue'
	export default {
		components: {
			HomeHeader,HomeContent
		},
		//#ifdef MP-WEIXIN
		mixins: [hooks],
		//#endif
	}
</script>

<style>
</style>
