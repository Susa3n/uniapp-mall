<template>
	<view class="container">
		<view style="margin-bottom: 10rpx;">
			<SearchInput></SearchInput>
		</view>
		<view>
			<swiper indicator-dots autoplay circular :interval="1500">
				<swiper-item v-for="(item,index) in bundleList" :key="item.goods_id">
					<image :src="item.image_src"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- <view class="tarbar">
			<view class="item">
				<view class="iconfont icon-ziyuan">
				</view>
				<text>XX超市</text>
			</view>
			<view class="item">
				<view class="iconfont icon-guanyuwomen">
				</view>
				<text>关于我们</text>
			</view>
			<view class="item">
				<view class="iconfont icon-tupian">
				</view>
				<text>社区图片</text>
			</view>
			<view class="item">
				<view class="iconfont icon-shipin">
				</view>
				<text>社区视频</text>
			</view>
		</view> -->
		<view class="tarbar">
			<view class="item" v-for="(item,index) in navList" :key="index">
				<view>
					<image :src="item.image_src" ></image>
				</view>
			</view>
		</view> 
	</view>
</template>

<script>
	import SearchInput from '@/components/home/searchInput.vue'
	import {
		getBundleList,getNavList
	} from '@/api/home/index.js'
	export default {
		name: 'HomeHeader',
		data() {
			return {
				bundleList: [],
				navList: []
			}
		},
		components: {
			SearchInput
		},
		mounted() {
			this.getBundleList()
			this.getNavList()
		},
		methods: {
			getBundleList() {
				getBundleList().then(result => {
					this.bundleList = result.message
				})
			},
			getNavList() {
				getNavList().then(result => {
					this.navList = result.message
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.tarbar {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 10rpx;
			.item {
				width: 25%;
				text-align: center;
				image {
					height: 200rpx;
					width: 100%;
				}
			}
		}
		// .tarbar {
		// 	margin: 20rpx 0;
		// 	display: flex;
		// 	.item {
		// 		width: 25%;
		// 		text-align: center;
		// 		view {
		// 			background-color: $shop-text-color ;
		// 			height: 120rpx;
		// 			width: 120rpx;
		// 			line-height: 120rpx;
		// 			border-radius: 60rpx;
		// 			margin: auto;
		// 			color: white;
		// 			font-size: 50rpx;
		// 		}
		// 		.icon-tupian {
		// 			font-size: 40rpx;
		// 		}
		// 		text {
		// 			font-size: 30rpx;
		// 		}
		// 	}
		// }
	}
</style>
