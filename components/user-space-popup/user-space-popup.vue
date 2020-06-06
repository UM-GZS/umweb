<template>
	<view>
	<view class="paper-right-popup-mask" v-show="navShow" @tap="hidepopup"></view>
	<view class="paper-right-popup" v-show="navShow">
		<view class="u-f-ac" hover-class="paper-right-hover" @tap="lahei">
			<view class="icon iconfont icon-dianzan-copy"></view>拉黑
		</view>
		<view class="u-f-ac" hover-class="paper-right-hover" @tap="beizhu">
			<view class="icon iconfont icon-dianzan-copy"></view>备注
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
			lahei() {
				this.$emit('lahei')
			},
			beizhu() {
				this.$emit('beizhu')
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
		top: 120upx;
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
