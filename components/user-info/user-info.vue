<template>
	<view class="home-info u-f-ac">
		<image :src="userInfo.userpic" mode="widthFix" lazy-load></image>
		<view class="u-f1">
			<view>{{userInfo.username}}</view>
			<view>总访客 {{userInfo.totalnum}} 今日 {{userInfo.todaynum}}</view>
		</view>
		<view class="icon iconfont icon-fenxiang"></view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.home-info{
	padding: 20upx 40upx;
}
.home-info>image{
	flex-shrink: 0;
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	margin-right: 15upx;
}
.home-info>view:first-of-type>view:first-child{
	font-size: 32upx;
}
.home-info>view:first-of-type>view:last-child{
	color: #BBBBBB;
}
.home-info>view:last-of-type{
	height: 100%;
}
</style>
