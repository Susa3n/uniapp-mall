<template>
	<view>
		<view class="iconfont icon-tupian">
		</view>
		<view class="container">
			rongqi
			<view class="content">
				内容
			</view>
		</view>
	</view>
</template>

<script>
	import hooks from '@/mixins/hooks.js'
	export default {
		data() {
			return {

			}
		},
		//#ifdef MP-WEIXIN
		mixins: [hooks],
		//#endif
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		height: 200px;
		width: 200px;
		background-color: antiquewhite;
		.content {
			height: 100px;
			width: 100px;
			background-color: $uni-color-error;
		}
	}

	.box-active {
		background-color: red;
	}


	.content-active {
		height: 50px;
		width: 50px;
		background-color: rebeccapurple;
	}
</style>
