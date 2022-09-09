<template>
	<view >
		<view class="container">
			<view class="warp">
				<input type="text" class="uni-input"  placeholder="淘一淘" />
				<button size="mini">搜索</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SerachInput'
	}
</script>

<style lang="scss">
	.container {
		height: 100rpx;
		background-color: #eee;
		display: flex;
		justify-content: center;
		align-items: center;
		.warp {
			position: relative;
			input {
				display: inline-block;
				width: 500rpx;
				height: 70rpx;
				padding-left: 50rpx;
				box-sizing: border-box;
				background-color: white;
				font-size: 30rpx;
				border: 4rpx solid #ff4400;
				border-radius: 40rpx;
			}
			button {
				position: absolute;
				right: 0;
				background-color: #ff4400;
				border-radius: 70rpx;
				color: white;
				height: 70rpx;
				line-height: 70rpx;
			}
		}
	}
</style>