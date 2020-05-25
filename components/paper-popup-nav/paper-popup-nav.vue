<template>
	<view>
	<view class="paper-right-popup-mask" v-show="navShow" @tap="hidepopup"></view>
	<view class="paper-right-popup" v-show="navShow">
		<view class="u-f-ac" hover-class="paper-right-hover" @tap="addf">
			<view class="icon iconfont icon-dianzan-copy"></view>加好友
		</view>
		<view class="u-f-ac" hover-class="paper-right-hover" @tap="clear">
			<view class="icon iconfont icon-dianzan-copy"></view>清理缓存
		</view>
	</view>	
	</view>
</template>

<script>
	export default {
		props: {
			navShow: Boolean
		},
		data() {
			return {
				
			};
		},
		methods: {
			hidepopup() {
				this.$emit('hidepopup')
			},
			addf() {
				this.$emit('addf')
			},
			clear() {
				this.$emit('clear')
			}
		}
	}
</script>

<style>
.paper-right-popup-mask{
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 1999;
	}
	.paper-right-popup{ 
		position: fixed;
		top: 10upx;
		right: 0;
		background: #FFFFFF;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
		z-index: 2000;
	}
	.paper-right-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.paper-right-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.paper-right-hover{
		background: #EEEEEE;
	}
</style>
