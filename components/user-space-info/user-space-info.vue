<template>
	<view class="user-space-info">
		<view class="user-space-info-item">
			<view>账号信息</view>
			<view>号龄：{{getreg}}</view>
			<view>账号ID：{{userInfo.id}}</view>
		</view>
		<view class="user-space-info-item">
			<view>个人信息</view>
			<view>星座：{{getcope}}</view>
			<view>职业：{{userInfo.work}}</view>
			<view>故乡：{{userInfo.address}}</view>
			<view>情感：{{userInfo.qg}}</view>
		</view>
	</view>
</template>

<script>
	import parsetTime from '../../common/parsetTime.js'
	export default {
		props: {
			userInfo: Object
		},
		computed: {
			getcope() {
				return parsetTime.getcope(this.userInfo.age);
			},
			getreg() {
				return parsetTime.getreg(this.userInfo.regtime);
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.user-space-info {
		padding: 0upx 30upx;
	}

	.user-space-info-item {
		padding: 20upx 0upx;
		border-bottom: 1upx solid #EEEEEE;
	}

	.user-space-info-item>view {
		color: #AAAAAA;
	}

	.user-space-info-item>view:first-child {
		color: #333333;
		font-size: 30upx;
		padding: 15upx 0upx;
	}
</style>
