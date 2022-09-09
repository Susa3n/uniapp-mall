<template>
	<view class="hot-goods">
		<view class="content-list">
			<view class="item" v-for="(item,index) in shopFloorData" :key="index">
				<view class="top">
					<image :src="item.floor_title.image_src" mode="scaleToFill"></image>
				</view>
				<view class="bottom">
					<view class="container">
						<view class="left">
							<image :src="item.product_list[0].image_src"></image>
						</view>
						<view class="right">
							<view v-for="(i,idx) in item.product_list" :key="idx">
								<image :src="item.product_list[++idx].image_src" v-if="idx !== 4"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getShopFloor
	} from '@/api/home/index.js'
	export default {
		data() {
			return {
				shopFloorData: []
			}
		},
		mounted() {
			this.getShopFloor()
		},
		methods: {
			getShopFloor() {
				getShopFloor().then(result => {
					this.shopFloorData = result.message
					console.log(this.shopFloorData);
				})
			}
		}
	}
</script>

<style lang="scss">
	.content-list {
		.item {
			height: 360rpx;
			width: 750rpx;
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;

			.top {
				height: 60rpx;
				width: 200rpx;

				image {
					height: 100%;
				}
			}

			.bottom {
				flex: 1;

				.container {
					height: 300rpx;
					display: flex;
					justify-content: space-between;
					margin-right: 10rpx;

					.left {
						width: 200rpx;
						height: 100%;
						padding-right: 10rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						flex: 1;
						display: grid;
						grid-template-columns: repeat(2, 50%);
						grid-template-rows: repeat(2, 50%);
						grid-row-gap: 10rpx;
						grid-column-gap: 10rpx;

						view {
							box-sizing: border-box;

							image {
								width: 100%;
								height: 100%;
							}
						}

					}
				}
			}
		}

	}
</style>
